import React from "react";
import Image from "next/image";
import HeaderImage from "../../../public/images/header_image.jpg";
import Link from "next/link";

const HeroArea = () => {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full h-96 xl:h-screen">
          <Image
            src={HeaderImage}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-950 opacity-70"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/**
               * =================
               * Hero area heading
               * =================
               */}

              <div className="mb-8 lg:mb-12">
                <h1 className="text-gray-200 text-2xl md:text-3xl xl:text-5xl font-bold mb-2 lg:mb-3 uppercase space-x-24 mx-6 md:mx-12 lg:mx-40">
                  Marketing is Targeting minds,
                </h1>

                <h1 className="text-gray-200 text-2xl md:text-3xl xl:text-5xl font-bold uppercase mb-2 lg:mb-3  space-x-24 mx-6 md:mx-12 lg:mx-40">
                  hitting wallets, embodying{" "}
                </h1>

                <h1 className="text-orange-400 text-2xl md:text-3xl xl:text-5xl font-bold uppercase space-x-24 mx-6 md:mx-12 lg:mx-40 animate-bounce">
                  CashCramento
                </h1>
              </div>

              {/**
               * =================
               * Hero area buttons
               * =================
               */}
              <div className="space-x-4">
                <Link
                  href={"https://cashcramento.affise.com/v2/sign/up"}
                  className={`bg-sky-400 text-gray-900 text-sm lg:text-base px-10 lg:px-16 py-2 lg:py-3 hover:bg-sky-600 hover:text-gray-200 rounded-md font-semibold uppercase active:bg-white active:text-gray-900 border border-sky-400 hover:border-sky-600 duration-300`}
                >
                  Sign Up
                </Link>

                <Link
                  href={"https://cashcramento.affise.com/v2/sign/in"}
                  className={`bg-white text-gray-900 text-sm lg:text-base px-10 lg:px-16 py-2 lg:py-3 hover:bg-sky-600 hover:text-gray-200 rounded-md font-semibold uppercase active:bg-white active:text-gray-900 border border-gray-800 hover:border-sky-600 duration-300`}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
