import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./pages/Home";
import "./index.css";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import Layout from "./components/nav-bar/Layout";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <>
      <Routes>
        <Route   element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="all-doctors" element={<Doctors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
