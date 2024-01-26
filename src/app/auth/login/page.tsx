"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useColorMode } from "@chakra-ui/react";
import Login from "@/components/forms/Login";
import Logo from "@/components/common/Logo";
import Register from "@/components/forms/Register";

type variant = "login" | "register";

const Page = () => {
  const [variant, setVariant] = useState<string>("login");
  const router = useRouter();
  const session = useSession();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <Logo width={300} height={200} colorMode={colorMode} />
      {variant === "login" ? (
        <Login changeVariant={setVariant} colorMode={colorMode} />
      ) : (
        <Register changeVariant={setVariant} colorMode={colorMode}/>
      )}
    </section>
  );
};

export default Page;
