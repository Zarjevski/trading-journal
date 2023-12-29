"use client";

import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <section className="flex relative">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
