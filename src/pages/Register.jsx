import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="max-w-sm mx-auto bg-[#F7F8F9] h-screen  py-8 px-4 flex flex-col">
      <h1 className="text-[#1D2226] text-[28px] font-bold">
        Create Your <br /> PopX account
      </h1>

      <div className="flex flex-col gap-4 mt-4">
        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Full Name<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
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
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>

        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Email address<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>

        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Password<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>

        <fieldset className="border border-solid border-[#CBCBCB] rounded px-3">
          <legend className="text-[#6C25FF] pr-3 text-sm font-semibold">
            Company name<span className="text-red-500">*</span>
          </legend>

          <input
            type="text"
            name="name"
            id="name"
            className="w-full border-none focus:outline-none pb-2  text-sm font-semibold bg-[#F7F8F9] inline-block text-[#1D2226]"
          />
        </fieldset>

        <div>
          <label className="font-semibold  text-sm">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4 mt-2 items-center  ">
            <div className="py-1">
              <input id="yes" className="text-3xl" name="radio" type="radio" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input id="no" name="radio" type="radio" />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/profile"
        className="bg-[#6C25FF] text-base text-center rounded p-3 text-white font-semibold mt-auto w-full align-end"
      >
        Create Account
      </Link>
    </div>
  );
}
