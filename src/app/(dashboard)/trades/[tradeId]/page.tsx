"use client";

import React from "react";
import { motion as m } from "framer-motion";

const Page = () => {
  return (
    <m.div
      className={`w-full flex justify-center items-center py-16 px-32 gap-12 h-[92vh] overflow-y-auto`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      page
    </m.div>
  );
};

export default Page;
