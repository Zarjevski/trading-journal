import React from "react";
import { useColorMode } from "@chakra-ui/react";
import SwitchSkin from "./SwitchSkin";
import Logo from "../common/Logo";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav
      className={`sticky flex justify-between items-center border-b h-[8vh] p-4  ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <Logo width={200} height={100} colorMode={colorMode} />
      <SwitchSkin mode={colorMode} toggle={toggleColorMode} />
    </nav>
  );
};

export default Navbar;
