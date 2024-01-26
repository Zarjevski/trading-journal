import axios from "axios";
import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";

const Rule = ({
  id,
  title,
  number,
}: {
  id: string;
  title: string;
  number: number;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className="h-12 w-full flex justify-between items-center p-2"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h6 className="capitalize">
        <span className="mr-1 font-extrabold">#{number + 1}.</span>
        {title}
      </h6>
      {isHovered ? (
        <div className="flex items-center">
          <IoPencil className={`h-4 w-4 m-2 cursor-pointer`} />
          <IoTrashOutline
            className={`h-4 w-4 m-2 cursor-pointer`}
            onClick={async () => {
              const remove = await axios.delete("/api/rules/delete", {
                data: { id },
              });
              location.reload()
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Rule;
