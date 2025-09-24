import React from "react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      {/* เจาะช่องที่เปลี่ยนเนื้อหาตอนเปลี่ยนลิงค์ */}
      <div
        style={{
          backgroundColor: "#e0e0e0",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
