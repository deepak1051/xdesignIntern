import React from "react";
import profileImg from "../assets/profile2.png";

export default function Profile() {
  return (
    <div className="max-w-sm mx-auto  flex flex-col  py-8 px-4">
      <h1 className="py-2 text-[28px] text-[#1D2226] font-semibold">
        Account Settings
      </h1>
      <div className="bg-[#F7F8F9] w-full h-screen rounded p-4">
        <div className="flex gap-6 items-center">
          <img className="w-20 h-20 " src={profileImg} alt="" />
          <div>
            <h2 className="text-[15px] text-[#1D2226]">Marry Doe</h2>
            <p className="text-[#1D2226]">Marry@Gmail.com</p>
          </div>
        </div>

        <p className="text-[#1D2226] text-[16px] mt-8">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="border-b-2 border-dashed pb-4 " />
      </div>
    </div>
  );
}
