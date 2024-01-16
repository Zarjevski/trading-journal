import React from "react";
import { useModalContext } from "@/context/ModalContext";

const Modal = () => {
  const {isOpen, Component}: any = useModalContext();
  return (
    <section
      className={`${
        isOpen
          ? "w-full min-h-screen absolute bg-black bg-opacity-30 flex items-center justify-center z-50"
          : "hidden"
      } transition duration-300 ease-in-out delay-150`}
    >
      <Component />
    </section>
  );
};

export default Modal;
