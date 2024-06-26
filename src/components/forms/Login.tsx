"use client";

import React, { useState } from "react";
import Input from "../common/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = ({
  changeVariant,
  colorMode,
}: {
  changeVariant: any;
  colorMode: string;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className={`p-12 mt-8 h-2/4 border sm:w-1/6 lg:w-1/4 md:w-2/6 shadow ${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      } `}
      onSubmit={async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
          const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <div className="text-center mb-6">
        <h1 className="text-xl capitalize font-medium ">wellcom trader!</h1>
        <h2 className="font-light text-gray-500">
          Please login or create new account
        </h2>
      </div>
      <Input
        type="email"
        name="email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        name="Password"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-gray-950 text-white h-12 my-2 rounded font-bold"
        type="submit"
      >
        Sign in
      </button>
      <div className="flex justify-between mt-2 capitalize">
        <p
          onClick={() => changeVariant("register")}
          className="hover:underline cursor-pointer"
        >
          create account
        </p>
        <Link href={"forgot-password"} className="hover:underline">
          forgot password?
        </Link>
      </div>
    </form>
  );
};

export default Login;
