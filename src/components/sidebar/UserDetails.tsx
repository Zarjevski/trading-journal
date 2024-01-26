"use client";

import Image from "next/image";
import Placeholder from "@/assets/placeholder.jpg";
import { Dispatch, SetStateAction } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { useUserContext } from "@/context/UserContext";
import Skeleton from "../common/Skeleton";

const UserDetails = ({
  isOpen,
  setIsOpen,
  colorMode,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  colorMode: string;
}) => {
  const data: any = useUserContext();
  const fullName = data.user?.firstName + " " + data.user?.lastName;
  const loading = data.isLoading
  return (
    <div className="w-full border-b">
      <div className="h-12 border-b flex w-full justify-end">
        <button
          className={`${
            isOpen
              ? "w-full flex justify-end p-4 items-center"
              : "w-full flex items-center justify-center"
          } ${
            colorMode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
          } cursor-pointer `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoChevronBackOutline className={"w-6 h-6"} />
          ) : (
            <IoChevronForwardOutline className={"w-6 h-6"} />
          )}
        </button>
      </div>
      <div className="w-full flex justify-center my-6 px-2">
        <Image
          src={Placeholder}
          width={80}
          height={80}
          alt="user"
          className={`${
            colorMode === "light" ? "bg-gray-300" : "bg-white"
          } border rounded-full p-1`}
        />
      </div>
      {isOpen ? (
        <div className="w-full flex flex-col justify-center items-center mb-6">
          {loading ? <Skeleton width={"w-1/2"} hieght={"h-4"}/> :           <h6 className="text-xs font-bold capitalize">{fullName}</h6>
}
          <h6 className="text-xs text-gray-400"> expert</h6>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
