import { useModalContext } from "@/context/ModalContext";
import React from "react";

const useResetModal = () => {
  const { setComponent, setIsOpen }: any = useModalContext();
  const reset = () => {
    setIsOpen(false);
    setComponent(() => React.Fragment);
  };
  return reset;
};

export default useResetModal;
