import React from "react";
import { useModalContext } from "@/context/ModalContext";
import { motion } from "framer-motion";

const Modal = () => {
  const { isOpen, Component }: any = useModalContext();
  return (
    <section
      className={`${
        isOpen
          ? "w-full min-h-screen absolute bg-black bg-opacity-30 z-50"
          : "hidden"
      } transition duration-300 ease-in-out delay-150`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-screen w-full flex items-center justify-center"
      >
        <Component />
      </motion.div>
    </section>
  );
};

export default Modal;
