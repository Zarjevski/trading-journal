import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface ExchangeCardProps {
  setActive: Dispatch<SetStateAction<any>>;
  title: string;
  image: string;
  id: string;
  active: { id: string; title: string };
}

const ExchangeCard: React.FC<ExchangeCardProps> = ({
  setActive,
  title,
  image,
  id,
  active,
}) => {
  return (
    <div
      className={`rounded border ${
        active.id === id ? "border-2 border-blue-500" : null
      } w-[48%] p-1 flex flex-col justify-center items-center cursor-pointer`}
      key={id}
      onClick={() => setActive({ title: title, id: id })}
    >
      <Image height={40} width={40} src={image} alt={title} />
      <h2 className="mt-1">{title}</h2>
    </div>
  );
};

export default ExchangeCard;
