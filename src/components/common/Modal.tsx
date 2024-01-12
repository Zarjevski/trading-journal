import React from "react";
import { useModalContext } from "@/context/ModalContext";

const Modal = ({ form: Form }: { form: React.FC }) => {
  const isOpen = useModalContext();
  return (
    <section
      className={`${
        isOpen
          ? "w-full h-screen absolute bg-black bg-opacity-30 flex items-center justify-center"
          : "hidden"
      }`}
    >
      <Form />
    </section>
  );
};

export default Modal;
