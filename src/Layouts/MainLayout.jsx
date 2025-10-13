import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
