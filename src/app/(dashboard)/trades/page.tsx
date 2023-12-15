"use client";

import { usePathname } from "next/navigation";

const Page = () => {
  const x = usePathname();
  console.log(x);
  return <div>trade page THIS IS THE PATH:</div>;
};

export default Page;
