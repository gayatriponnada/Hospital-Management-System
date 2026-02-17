import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);        // Supabase user object
  const [profile, setProfile] = useState(null);  // Your Profiles table data
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user and profile on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const {
          data: { user: currentUser },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !currentUser) {
          setUser(null);
          setProfile(null);
          setLoading(false);
          return;
        }

        setUser(currentUser);

        const { data: profileData, error: profileError } = await supabase
          .from("Profiles")
          .select("*")
          .eq("id", currentUser.id)
          .single();

        if (profileError) throw profileError;

        setProfile(profileData);
      } catch (err) {
        console.error("Failed to fetch user/profile:", err);
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();

    // Optional: listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        // refetch profile
        supabase
          .from("Profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()
          .then(({ data, error }) => {
            if (!error) setProfile(data);
          });
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Login function
  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    setUser(data.user);

    // fetch profile
    const { data: profileData, error: profileError } = await supabase
      .from("Profiles")
      .select("*")
      .eq("id", data.user.id)
      .single();

    if (profileError) throw profileError;

    setProfile(profileData);

    // role-based navigation
    if (profileData.role === "admin") navigate("/admin/dashboard");
    else if (profileData.role === "doctor") navigate("/doctor/dashboard");
    else navigate("/");
  };

  // Register function
  const signup = async (details) => {
    const { data, error } = await supabase.auth.signUp({
      email: details.email,
      password: details.password,
    });

    if (error) throw error;

    const userId = data.user.id;

    const { error: profileError } = await supabase.from("Profiles").insert({
      id: userId,
      fullname: details.fullname,
      role: details.role,
      gender: details.gender,
      dob: details.dob,
      contactNumber: details.contactNumber,
      address: details.address,
    });

    if (profileError) throw profileError;

    setUser(data.user);
    setProfile({ ...details, id: userId });

    // role-based navigation
    if (details.role === "admin") navigate("/admin/dashboard");
    else if (details.role === "doctor") navigate("/doctor/dashboard");
    else navigate("/");
  };

  // Logout function
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, profile, login, signup, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => useContext(AuthContext);