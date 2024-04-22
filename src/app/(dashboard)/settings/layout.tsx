"use client";

import React from "react";
import { useColorMode } from "@chakra-ui/react";
import SettingsLinks from "@/app/(dashboard)/settings/settingsLinks.json";
import { useRouter } from "next/navigation";
import { motion as m } from "framer-motion";
import { IoSettings } from "react-icons/io5";
import { fadeIn } from "@/utils/framerEffects";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <section
      className={`w-full h-[92vh] py-16 px-32 flex justify-center items-center`}
    >
      <m.div
        className={`w-4/6 flex h-full border shadow ${
          colorMode === "light" ? "bg-white" : "bg-gray-800"
        }`}
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <div className="max-w-1/4 min-w-1/4 w-1/4 h-full border-r p-4 flex flex-col justify-between">
          <div className="flex items-center flex-col justify-center">
            <IoSettings className="h-16 w-16" />
            <h1 className="font-bold text-2xl">Settings</h1>
          </div>
          <ul className="w-full flex flex-col justify-center items-center">
            {SettingsLinks.map((link, index) => {
              return (
                <li
                  onClick={() => router.push(`/settings/${link.link}`)}
                  key={index}
                  className={`w-full rounded cursor-pointer h-12 capitalize font-medium flex items-center justify-center ${
                    colorMode === "light"
                      ? "hover:bg-slate-200"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {link.title}
                </li>
              );
            })}
          </ul>
          <span className="h-1/3"></span>
        </div>
        <div className="w-full">{children}</div>
      </m.div>
    </section>
  );
};

export default SettingsLayout;
