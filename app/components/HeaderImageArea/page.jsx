import React from "react";
import Image from "next/image";
import HeaderImage from "../../../public/images/img_01.jpg";
import Link from "next/link";

const HeaderImageArea = () => {
  return (
    <>
      <header className="relative w-full">
        <div className="relative w-full h-96 lg:h-screen">
          <Image
            src={HeaderImage}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Heading */}
              <div className="mb-10 lg:mb-12">
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 uppercase space-x-24 mx-6 md:mx-12 lg:mx-40 drop-shadow-2xl">
                  Marketing is Targeting minds, hitting
                </h1>

                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold uppercase space-x-24 mx-6 md:mx-12 lg:mx-40">
                  wallets, embodying{" "}
                  <span className="text-lime-500 inline-block animate-bounce">
                    CashCramento
                  </span>
                </h1>
              </div>

              <div className="space-x-4">
                {/* Sign up button */}
                <Link
                  href="https://cashcramento.affise.com/v2/sign/up"
                  className="bg-green-600 hover:bg-green-800 text-white text-sm lg:text-base px-6 lg:px-12 py-2 lg:py-3 rounded-md font-semibold transition duration-300 uppercase border border-solid border-white"
                >
                  Sing Up
                </Link>

                {/* Login button */}
                <Link
                  href="https://cashcramento.affise.com/v2/sign/in"
                  className="bg-white text-black text-sm lg:text-base px-6 lg:px-12 py-2 lg:py-3 hover:bg-gray-300 rounded-md font-semibold hover:scale-90 transition duration-300 uppercase"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderImageArea;
