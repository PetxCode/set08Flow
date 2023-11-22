import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { createAccount, loginAccount } from "../../api/authAPI";

import { SyncLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const schema = yup.object({
    email: yup.string().email().required("email must be filled"),
    password: yup.string().min(6).required("password must be filled"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    setToggle(true);
    console.log(data);
    const { email, password } = data;
    loginAccount({ email, password }).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      setToggle(false);
      navigate("/");
    });
    // reset();
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* {toggle && <LoadingScreen />} */}
      <div className="border rounded-md w-[400px] min-h-[300px] shadow-sm mx-4 ">
        <form className="pl-4 mt-8" onSubmit={onHandleSubmit}>
          <span className="font-bold text-[20px]">Log in</span>
          <br />
          <br />
          <hr />
          <br />
          <br />
          {/* Input form */}

          <div>
            <div className=" text-[12px] mt-2">email</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="email"
              {...register("email")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.email?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.email?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className=" text-[12px] mt-2">password</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="password"
              {...register("password")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.password?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.password?.message}
                </div>
              )}
            </div>
          </div>

          <br />
          <br />
          <div className="w-[95%]">
            <button
              className="w-full flex bg-purple-600 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
              type="submit"
            >
              {toggle ? <SyncLoader color="white" size={11} /> : "Log in"}
            </button>
            <div className="text-[12px] mt-2 text-center">
              Don't have an Account,
              <Link to="/register">
                <strong className="text-purple-900 ml-1 font-bold">
                  Sign up here
                </strong>
              </Link>
            </div>
            <br />
            <div className="flex w-full h-4 items-center">
              <div className="border-b w-full " />
              <div className="mx-4">or</div>
              <div className="border-b w-full " />
            </div>
            <br />

            <div className="flex mb-4">
              <button className="w-full flex bg-red-600 rounded-sm justify-center py-3 text-white mr-1 ">
                with Google
              </button>
              <button className="w-full flex bg-blue-700 rounded-sm justify-center py-3 text-white ml-1">
                with Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
