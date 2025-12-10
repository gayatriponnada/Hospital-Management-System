import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./pages/Home";
import "./index.css";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import Layout from "./components/nav-bar/Layout";
import Doctors from "./pages/Doctors";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="all-doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
