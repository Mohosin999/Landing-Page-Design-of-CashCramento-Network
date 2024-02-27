import React from "react";
import Image from "next/image";
import HeaderImage from "../../../public/images/img_01.jpg";

const HeaderImageArea = () => {
  return (
    <>
      <header className="relative w-full">
        <div className="relative w-full h-screen">
          <Image
            src={HeaderImage}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold mb-4 uppercase space-x-24">
                Advertising is the art of aiming for the head and hitting the
                wallet
              </h1>
              <div className="space-x-4">
                {/* Sign up button */}
                <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:scale-95 transition duration-300 uppercase">
                  Sing Up
                </button>

                {/* Login button */}
                <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:scale-95 transition duration-300 uppercase">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderImageArea;
