"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import Placeholder from "@/assets/placeholder.jpg";

const UserDetails = ({
  isOpen,
  setIsOpen,
  colorMode,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  colorMode: string;
}) => {
  return (
    <div className="w-full border-b">
      <div className="h-12 border-b flex w-full justify-end">
        <button
          className={`${
            isOpen
              ? "w-full flex justify-end p-4 items-center"
              : "w-full flex items-center justify-center"
          } ${colorMode === 'light' ? "hover:bg-gray-200" : "hover:bg-gray-700"} cursor-pointer `}
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
          <h6 className="text-xs font-bold capitalize">victor zarjevski</h6>
          <h6 className="text-xs text-gray-400"> expert</h6>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
