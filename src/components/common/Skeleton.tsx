import React from "react";
import { useColorMode } from "@chakra-ui/react";

interface SkeletonProps {
  width: string;
  hieght: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ hieght, width }) => {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`${hieght} ${width} ${
        colorMode === "light" ? "bg-gray-200" : "bg-gray-700"
      } my-2 animate-pulse`}
    >
    </div>
  );
};

export default Skeleton;
