import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const UserDetails = () => {
  const open = true;
  return (
    <div className="w-full border-b">
      <div className="h-10 border-b flex w-full justify-end">
        <div className="border-l w-10 flex justify-center items-center cursor-pointer">
          {open ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 mb-2">
        <Image
          src=""
          width={80}
          height={80}
          alt="user"
          style={{ borderRadius: "50%", background: "gray" }}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-6">
        <h6 className="text-xs font-bold capitalize">victor zarjevski</h6>
        <h6 className="text-xs text-gray-400"> expert</h6>
      </div>
    </div>
  );
};

export default UserDetails;
