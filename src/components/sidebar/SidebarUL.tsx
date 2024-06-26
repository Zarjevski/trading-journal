"use client";

import Link from "next/link";
import useSidebarLinks from "../../hooks/useSidebarLinks";

const SidebarUL = ({
  colorMode,
  isOpen,
}: {
  colorMode: string;
  isOpen: boolean;
}) => {
  const links = useSidebarLinks();
  return (
    <ul className="w-full h-full flex flex-col items-center font-medium ">
      {links.map((link, index) => {
        const { icon: Icon, active } = link;
        {
          return (
            <Link
              key={index}
              href={link.path}
              className={`p-2 w-[96%] rounded my-1 flex items-center cursor-pointer h-12 
              ${!isOpen ? "justify-center" : null}
              ${
                active && colorMode === "light"
                  ? "text-blue-400"
                  : active && colorMode === "dark"
                  ? "text-violet-400"
                  : null
              }
              ${
                active && colorMode === "light"
                  ? "bg-gray-100"
                  : active
                  ? "bg-gray-700"
                  : null
              }
              ${
                colorMode === "light"
                  ? "hover:bg-gray-200"
                  : "hover:bg-gray-700"
              }`}
            >
              <Icon className={`h-6 w-6 ${isOpen ? "mr-2 ml-8" : "h-6 w-6"}`} />
              {isOpen ? link.title : null}
            </Link>
          );
        }
      })}
    </ul>
  );
};

export default SidebarUL;
