import { useState } from "react";
import { createAccount } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

const Sign_in = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const createUser = () => {
    createAccount({ email, password, companyName }).then((res: any) => {
      localStorage.setItem("user", JSON.stringify(res));

      navigate("/");
    });
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[450px] min-h-[520px] border rounded-md shadow-md bg-white ">
        <div>
          <p className="text-[23px] font-bold py-8">Create your account</p>
          <p className="ml-[5px] size-[10px]">to continue to RemindMe</p>
          <div className="flex w-[100%] h-10 items-center ">
            <div className="border-b  w-full" />
            <span className="mx-3">or</span>
            <div className="border-b  w-full" />
          </div>

          <div>
            <input
              placeholder="company Name"
              className="mx-4 border rounded-sm outline-none w-[90%] h-12 px-2 my-2"
              value={companyName}
              onChange={(e: any) => {
                setCompanyName(e.target.value);
              }}
            />
            <input
              placeholder="email"
              className="mx-4 border rounded-sm outline-none w-[90%] h-12 px-2 my-2"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="password"
              className="mx-4 border rounded-sm outline-none w-[90%] h-12 px-2 my-2"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />

            <br />
            <br />
            <button
              className="mx-4 border rounded-sm outline-none w-[90%] h-12 px-2 my-2"
              onClick={() => {
                createUser();
                console.log("clicked");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
