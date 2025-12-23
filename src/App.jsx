import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./pages/patient-page/Home";
import "./index.css";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import Layout from "./components/nav-bar/Layout";
import Doctors from "./pages/patient-page/AllDoctors";
import About from "./pages/patient-page/About";
import LabReports from "./pages/patient-page/LabReports";
import DoctorsLayout from "./components/nav-bar/DoctorsLayout";
import DoctorsDashboard from "./pages/doctors-page/DoctorsDashboard";
import DoctorAppointmentDetails from "./pages/DoctorAppointmentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/patient/dashboard/all-doctors" element={<Doctors />} />
          <Route
            path="/patient/dashboard/all-doctors/:id"
            element={<Doctors />}
          />
          <Route
            path="/patient/dashboard/lab-reports"
            element={<LabReports />}
          />
          <Route path="/patient/dashboard/about" element={<About />} />
        </Route>
        <Route element={<DoctorsLayout />}>
          <Route path="/doctor/dashboard" element={<DoctorsDashboard />} />
          <Route
            path="/doctor/appointments"
            element={<DoctorAppointmentDetails />}
          />
          <Route path="/doctor/patient" element={}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
