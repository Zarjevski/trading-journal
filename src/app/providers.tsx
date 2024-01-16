"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import UserProvider from "@/context/UserContext";
import ModalProvider from "@/context/ModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
        <ModalProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ModalProvider>
      </UserProvider>
    </SessionProvider>
  );
}
