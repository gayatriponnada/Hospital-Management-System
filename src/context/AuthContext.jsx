import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Restore login on refresh
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth?.userId) {
      axios
        .get(`${BASE_URL}/users/${auth.userId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("auth");
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);

    // store minimal info only
    localStorage.setItem(
      "auth",
      JSON.stringify({
        userId: userData.id,
        role: userData.role,
      })
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
