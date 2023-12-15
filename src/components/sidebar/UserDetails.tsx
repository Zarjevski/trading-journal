"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const UserDetails = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full border-b">
      <div className="h-10 border-b flex w-full justify-end">
        <div
          className="w-12 flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoChevronBackOutline className={"w-6 h-6"} />
          ) : (
            <IoChevronForwardOutline className={"w-6 h-6"} />
          )}
        </div>
      </div>
      <div className="w-full flex justify-center my-6">
        <Image
          src=""
          width={80}
          height={80}
          alt="user"
          className="bg-gray-400 rounded-full m-1"
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
