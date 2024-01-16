import React from "react";
import { useModalContext } from "@/context/ModalContext";
import NewTrade from "@/components/forms/NewTrade";

const useNewTradeForm = () => {
  const { setComponent, setIsOpen }: any = useModalContext();
  const setupModal = () => {
    setIsOpen(true);
    console.log('use form hook');
    
    setComponent(() => {
      return NewTrade;
    });
  };
  return setupModal;
};

export default useNewTradeForm;
