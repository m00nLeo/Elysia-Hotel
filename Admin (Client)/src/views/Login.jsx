import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { getAdmin } from "../../services/adminService";
import GlobalSpinner from "../components/common/GlobalSpinner";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [key, setKey] = useState("");
  const [pass, setPass] = useState("");
  const [warning, setWarning] = useState(true);
  const [warningUserName, setWarningUserName] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ["administrator"],
    queryFn: () => getAdmin(),
  });

  if (isLoading) return <GlobalSpinner />;

  const { data: admins } = data;

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkKey = (e) => {
    setKey(e.target.value);
  };

  const checkPass = (e) => {
    setPass(e.target.value);
  };

  const checkPassword = () => {
    if (admins.admin.find((item) => item.username === key)) {
      setWarningUserName(true);
      const accessRight = admins.admin.find((item) => item.username === key);
      if (accessRight?.password === pass) {
        location.replace("/overview");
        const cookie = `${key}, ${pass}`;
        localStorage.setItem("login", JSON.stringify(cookie));
      } else {
        setWarning(false);
      }
    } else {
      setWarning(true);
      setWarningUserName(false);
    }
  };

  return (
    <div>
      {/* Container */}
      <div className="fixed w-[80%] max-w-xs top-[20%] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2">
        {/* Layout */}
        <div className="mb-2 flex flex-col gap-3 justify-center items-center  bg-gray-800 dark:bg-gray-100/95 py-8 px-6 rounded-lg">
          {/* Content */}
          <div>
            <h2 className="text-center text-3xl font-bold text-teal-600 ">
              Sign in
            </h2>
          </div>
          <div className="w-full">
            {/* Username */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className=" text-teal-700 font-medium text-base tracking-wide">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full max-w-xs"
                onChange={checkKey}
              />
            </div>
            {/* Password */}
            <div className="form-control w-full max-w-xs mb-3 relative">
              <label className="label">
                <span className=" text-teal-700 font-medium text-base tracking-wide">
                  Password
                </span>
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                onChange={checkPass}
              />
              <button
                onClick={togglePassword}
                className="absolute bottom-3 right-4 text-black"
              >
                <AiOutlineEye hidden={!passwordShown} />
                <AiOutlineEyeInvisible hidden={passwordShown} />
              </button>
            </div>
            {/* Submit btn */}

            <button
              type="submit"
              onClick={checkPassword}
              className=" w-full btn btn-square bg-teal-600 font-semibold text-white text-base tracking-wider hover:bg-slate-200  hover:text-teal-600 hover:font-bold px-10 border-none mt-4"
            >
              Login
            </button>
          </div>
        </div>
        <div
          className={`${
            warning ? "hidden" : ""
          } flex gap-2 text-red-500 italic font-thin`}
        >
          <RiErrorWarningLine className="mt-1.5" /> The password was incorrect.
          Please try again.{" "}
        </div>

        <div
          className={`${
            warningUserName ? "hidden" : ""
          } gap-2 flex text-red-500 italic font-thin`}
        >
          <RiErrorWarningLine className="mt-1" /> Username was incorrect. Please
          try again.{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
