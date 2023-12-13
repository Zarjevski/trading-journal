"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
