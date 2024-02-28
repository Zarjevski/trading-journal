"use client";

import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import useNewExcahngeForm from "@/hooks/useNewExchangeForm";
import Skeleton from "@/components/common/Skeleton";
import { useUserContext } from "@/context/UserContext";
import axios from "axios";

const Page = () => {
  const newExcahnge = useNewExcahngeForm();
  const { isLoading, user }: any = useUserContext();
  const [active, setActive] = React.useState("");

  const deleteExchange = async () => {
    if (active) {
      const response = await axios.delete("/api/exchanges/delete", {
        data: { exchangeId: active },
      });
      if (response.status == 200) {
        location.reload();
      }
    }
  };

  return (
    <div className="h-full w-full">
      <div className="w-full h-1/3">
        <header className="w-full flex justify-between border-b py-2 px-4 ">
          <h1 className="font-bold capitalize">my exchanges</h1>
          <Button text="add exchange" onClick={() => newExcahnge()} />
        </header>
        {/* container */}
        <div className="w-full h-auto gap-2 flex flex-wrap p-2 overflow-auto ">
          {isLoading ? (
            <Skeleton width={"w-1/3"} hieght={"h-14"} />
          ) : (
            user.exchanges.map((card: any, index: number) => {
              console.log(card);

              const { image, exchange } = card;
              return (
                <div
                  className={`w-[24%] h-14 border flex items-center justify-around cursor-pointer ${
                    active === card.id ? "border-blue-400" : null
                  }`}
                  key={index}
                  onClick={() => setActive(card.id)}
                >
                  <Image
                    height={40}
                    width={40}
                    src={image}
                    alt="exchange logo"
                  />
                  <h1 className="font-medium">{exchange}</h1>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="w-full h-auto">
        <header className="w-full  border-b p-4">
          <h1 className="font-bold capitalize">account information</h1>
        </header>
      </div>
      <div className="w-full h-1/3 p-4">
        <header className="w-full  border-b py-2">
          <h1 className="font-bold capitalize">delete exchange</h1>
        </header>
        <div className="">
          <p className="py-2">
            Deleting your exchange is an irreversible action
          </p>
          <Button text="delete" onClick={() => deleteExchange()} />
        </div>
      </div>
    </div>
  );
};

export default Page;
