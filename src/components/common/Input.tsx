import React from "react";

interface InputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Input: React.FC<InputProps> = ({ type, label, name, onChange }) => {
  return (
    <div className="w-full my-2 ">
      <label htmlFor={name} className="my-2 font-bold">{label}:</label>
      <input type={type} name={name} onChange={onChange} className="w-full my-2 p-2 h-10 border" />
    </div>
  );
};

export default Input;
