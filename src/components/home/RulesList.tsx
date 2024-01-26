import React from "react";
import Rule from "./Rule";
import useNewRuleForm from "@/hooks/useNewRuleForm";
import Button from "../common/Button";
import Skeleton from "../common/Skeleton";
import { useUserContext } from "@/context/UserContext";
import { useColorMode } from "@chakra-ui/react";

const RulesList = () => {
  const data: any = useUserContext();
  const newRule = useNewRuleForm();
  const { colorMode } = useColorMode();
  
  const loading = data.isLoading;
  const rules = data.user.rules;

  return (
    <div
      className={`${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }
      p-1 rounded col-start-4 row-span-2 border shadow`}
    >
      <header className="w-full flex justify-between border-b p-1">
        <h1 className="font-bold text-lg">My Rules</h1>
        <Button onClick={() => newRule()} text={"new"} />
      </header>
      <ul className="w-full h-auto bg-gray-850 text-sm p-2">
        {loading
          ? [1, 2, 3, 4].map((skeleton, index) => {
              return <Skeleton key={index} width={"w-full"} hieght={"h-8"}/>
            })
          : rules.map(
              (rule: { content: string; id: string }, index: number) => {
                return (
                  <Rule
                    key={rule.id}
                    id={rule.id}
                    title={rule.content}
                    number={index}
                  />
                );
              }
            )}
      </ul>
    </div>
  );
};

export default RulesList;
