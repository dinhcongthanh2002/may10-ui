import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full px-5 md:min-w-[600px] pt-20 md:pt-28 m-auto">
      <div className="form relative z-10 bg-white md:max-w-[600px] mx-auto mb-40 md:mb-52 p-7 md:p-16 shadow-login">
        <form className="register-form">
          <p className="font-medium text-[#666] mb-2">Username:</p>
          <input type="text" required />
          <p className="font-medium text-[#666] mb-2">Password:</p>
          <input type="password" required />
          <button className="uppercase bg-black w-full border-0 p-4 text-white text-sm font-medium transition-all cursor-pointer hover:opacity-90">
            Register
          </button>
          <p className="mt-4 text-[#b3b3b3] text-xs">
            Already registered?{" "}
            <Link className="text-black" to={"/login"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
