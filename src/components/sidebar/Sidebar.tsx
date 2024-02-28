import { useColorMode } from "@chakra-ui/react";
import { IoExitOutline } from "react-icons/io5";
import UserDetails from "./UserDetails";
import SidebarUL from "./SidebarUL";
import { useState } from "react";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <aside
      className={`
      flex flex-col justify-between sticky transition-all ${
        isOpen ? "w-60" : "w-16"
      } border-r h-[92vh]
      ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <UserDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        colorMode={colorMode}
      />
      <SidebarUL colorMode={colorMode} isOpen={isOpen} />
      <button
        className={`p-2 h-14 w-full flex items-center cursor-pointer border-t  text-red-600 font-medium ${
          colorMode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
        }
        ${!isOpen ? "justify-center" : null}
        `}
        onClick={() => signOut()}
      >
        <IoExitOutline className={isOpen ? "mr-2 ml-8 h-6 w-6" : "h-6 w-6"} />
        {isOpen ? "Logout" : null}
      </button>
    </aside>
  );
};

export default Sidebar;
