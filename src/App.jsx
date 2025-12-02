import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./pages/Home";
import "./index.css";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/all-doctors" element={<AllDoctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
