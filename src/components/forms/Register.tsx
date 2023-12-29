import { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "../common/Input";
import axios from "axios";

const Register = ({ changeVariant }: { changeVariant: any }) => {
  const [data, setData] = useState<any>({email:"",password:"",firstname:"",lastname:""});
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      className="p-12 mt-8 h-4/6 border w-1/4 bg-white shadow"
      onSubmit={async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (
          data?.firstName &&
          data?.lastName &&
          data?.email &&
          data?.password
        ) {
          try {
            const signUp = await axios.post("/api/register", data);
            signIn("credentials", data.email, data.password)
          } catch (error) {
            console.log(error);
          }
        }
      }}
    >
      <header className="text-center mb-6">
        <h1 className="text-xl capitalize font-bold">Create an account</h1>
        <h2 className="text-gray-500">
          start journaling your trades today
        </h2>
      </header>
      <Input
        type="text"
        name="firstName"
        label="firstName"
        onChange={handleChanges}
      />
      <Input
        type="text"
        name="lastName"
        label="lastName"
        onChange={handleChanges}
      />
      <Input type="email" name="email" label="Email" onChange={handleChanges} />
      <Input
        type="password"
        name="password"
        label="password"
        onChange={handleChanges}
      />
      <button
        className="w-full bg-gray-950 text-white h-12 my-2 rounded font-bold"
        type="submit"
      >
        Sign up
      </button>
      <footer className="w-full flex justify-center mt-6">
        <h2
          className="flex items-center font-medium cursor-pointer"
          onClick={() => changeVariant("login")}
        >
          I already have a account
        </h2>
      </footer>
    </form>
  );
};

export default Register;
