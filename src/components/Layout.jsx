import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="rounded-md shadow-md p-8"
        // style={{
        //   backgroundColor: "#e0e0e0",
        //   border: "1px solid #ccc",
        //   padding: "20px",
        // }}
      >
        {navigation.state === "loading" && (
          <div>
            <h3 className="text-red-500">
              กำลังโหลดข้อมูลอยู่ รอสักครู่นะ....
            </h3>
          </div>
        )}

        {/* เจาะช่องที่เปลี่ยนเนื้อหาตอนเปลี่ยนลิงค์ */}
        <Outlet />
      </div>
    </div>
  );
}
