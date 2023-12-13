import { useColorMode } from "@chakra-ui/react";
import useSidebarLinks from "../hooks/useSidebarLinks";
import UserDetails from "./UserDetails";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const links = useSidebarLinks();
  return (
    <aside
      className={`
      flex flex-col w-48 border-r  h-[94vh]
      ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <UserDetails/>
      <ul className="w-full flex flex-col items-center mt-2">
        {links.map((link) => {
          const {icon: Icon, active} = link
          return (
            <li
              className={`p-2 w-full flex items-center ${
                colorMode === "light"
                  ? "hover:bg-gray-200"
                  : "hover:bg-gray-700"
              }`}
            >
              <Icon className="mr-2 ml-8 h-4 w-4"/>
              <Link
                href={link.path}
                className={`${active ? 'text-violet-600' : ""} text-sm`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
