import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        style={{
          backgroundColor: "#e0e0e0",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        {/* เจาะช่องที่เปลี่ยนเนื้อหาตอนเปลี่ยนลิงค์ */}
        <Outlet />
      </div>
    </div>
  );
}
