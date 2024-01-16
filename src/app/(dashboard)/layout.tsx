"use client";

import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/common/Modal";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Modal />
    <main>
      <Navbar />
      <section className="flex relative">
        <Sidebar />
        {children}
      </section>
    </main>
    </>
  );
};

export default DashboardLayout;
