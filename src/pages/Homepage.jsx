import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="max-w-sm mx-auto bg-[#F7F8F9] h-screen flex items-end py-8 px-4">
      <div>
        <h1 className="py-2 text-[28px] text-[#1D2226] font-bold">
          Welcome to PopX
        </h1>
        <p className="pb-10 text-[#1D2226] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="flex flex-col gap-2   w-full ">
          <Link
            to="/register"
            className=" bg-[#6C25FF] text-base text-center rounded p-3 text-white font-semibold"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="bg-[#6C25FF4B] font-base text-center rounded  p-3 font-semibold"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
