import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className=" p-4 ">
        <Outlet />
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
