import React from "react";
import { useColorMode } from "@chakra-ui/react";
import SwitchSkin from "./SwitchSkin";
import LogoWhite from '../assets/logo-white.png'
import LogoBlack from '../assets/logo-black.png'
import Image from "next/image";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className="flex justify-between items-center border-b h-[6vh] p-4">
      <Image src={colorMode === 'light' ? LogoBlack : LogoWhite} width={150} height={50} alt="logo" />
      <SwitchSkin mode={colorMode} toggle={toggleColorMode}/>
    </nav>
  );
};

export default Navbar;
