'use client'

import React from "react";
import { IoPencil } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image";

const Page = () => {
  const handleSubmit = async() => {
    return "hello"
  }
  return (
    <div className="w-full h-full">
      <div className="w-full h-auto p-4 flex items-center justify-center ">
        <div className="relative rounded-full h-44 w-44 bg-gray-200 border shadow flex  items-center justify-center">
          <Image
            src=""
            alt=""
            className="w-[95%] h-[95%] bg-white rounded-full"
          />
          <button
            title="change photo"
            className="absolute border-2 h-8 w-8 bottom-4 right-0 bg-white z-10"
          >
            <MdOutlineFileUpload />
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="border h-1/3 w-full">
        <footer>
          <button>save changes</button>
        </footer>
      </form>
    </div>
  );
};

export default Page;
