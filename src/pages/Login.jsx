import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="max-w-sm mx-auto bg-[#F7F8F9] h-screen  py-8 px-4 flex flex-col">
      <h1 className="text-[#1D2226] text-[28px] font-bold">
        Signin to your <br /> PopX account
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="flex flex-col gap-4 mt-4">
        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Full Name<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter email address"
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>

        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Phone number<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter password"
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>
      </div>

      <Link
        to="/profile"
        className="bg-[#CBCBCB] text-base text-center rounded p-3 text-white font-semibold  w-full mt-6 "
      >
        Login
      </Link>
    </div>
  );
}
