import React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";

const SwitchSkin = ({ mode, toggle }: { mode: string; toggle: () => void }) => {
  if (mode === "light") {
    return (
      <IconButton
        aria-label="Switch to dark"
        icon={<FaRegMoon />}
        onClick={() => toggle()}
      />
    );
  } else {
    return (
      <IconButton
        aria-label="Search database"
        icon={<FaRegSun />}
        onClick={() => toggle()}
      />
    );
  }
};

export default SwitchSkin;
