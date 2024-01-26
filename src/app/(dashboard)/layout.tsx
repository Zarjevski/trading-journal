"use client";

import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/common/Modal";
import { useColorMode } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {colorMode} = useColorMode()
  return (
    <>
    <Modal />
    <main className={`${colorMode === "light" ? "bg-gray-100" : "bg-gray-900"}`}>
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
