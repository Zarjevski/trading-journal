import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full p-4">
      <header className="border-b p-2 my-2 w-full">
        <h1 className="font-medium capitalize text-lg">delete your account</h1>
      </header>
      <div className="w-full h-full">
        <p className="w-5/6 mb-4">
          We&apos;re sorry to see you go. If you&apos;ve made the decision to delete your
          account, please take a moment to review if there is important
          information you want to save.
        </p>
        <button className="bg-red-500 rounded p-2 font-bold text-white">
          i understand, delete my account.
        </button>
      </div>
    </div>
  );
};

export default Page;
