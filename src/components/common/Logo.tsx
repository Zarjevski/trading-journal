import Image from "next/image";
import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";

interface LogoProps {
  width: number;
  height: number;
  colorMode: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, colorMode }) => {
  return (
    <Image
      src={colorMode === "light" ? LogoBlack : LogoWhite}
      width={width}
      height={height}
      alt="logo"
      className="cursor-pointer  xs:h-4 xs:w-16 md:h-10 md:w-72 "
    />
  );
};

export default Logo;
