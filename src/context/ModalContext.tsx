import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Component, setComponent] = useState<any>(() => React.Fragment);
  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, setComponent, Component }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
