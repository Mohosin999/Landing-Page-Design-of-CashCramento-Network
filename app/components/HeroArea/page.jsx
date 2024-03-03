import React from "react";
import Image from "next/image";
// import HeaderImage from "../../../public/images/img_01.jpg";
import Link from "next/link";
import ButtonLink from "../UI/ButtonLink/page";

const HeroArea = () => {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full h-60 xl:h-96 mt-10">
          {/* <Image
            src={HeaderImage}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div> */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/**
               * =================
               * Hero area heading
               * =================
               */}

              <div className="mb-8 lg:mb-12">
                <h1 className="text-gray-900 dark:text-gray-200 text-2xl md:text-3xl xl:text-5xl font-bold mb-2 lg:mb-3 uppercase space-x-24 mx-6 md:mx-12 lg:mx-40">
                  Marketing is Targeting minds,
                </h1>

                <h1 className="text-gray-900 dark:text-gray-200 text-2xl md:text-3xl xl:text-5xl font-bold uppercase mb-2 lg:mb-3  space-x-24 mx-6 md:mx-12 lg:mx-40">
                  hitting wallets, embodying{" "}
                </h1>

                <h1 className="text-sky-600 text-2xl md:text-3xl xl:text-5xl font-bold uppercase space-x-24 mx-6 md:mx-12 lg:mx-40 animate-bounce">
                  CashCramento
                </h1>
              </div>

              {/**
               * =================
               * Hero area buttons
               * =================
               */}
              <div className="space-x-4">
                <ButtonLink
                  title={"Sign Up"}
                  href={"https://cashcramento.affise.com/v2/sign/up"}
                />

                <ButtonLink
                  title={"Login"}
                  href={"https://cashcramento.affise.com/v2/sign/in"}
                  className={
                    "!bg-white !border-gray-800 hover:!bg-sky-700 hover:!border-sky-700 active:!bg-white active:!text-gray-900"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;

// import React from "react";
// import Image from "next/image";
// import HeaderImage from "../../../public/images/img_01.jpg";
// import Link from "next/link";

// const HeroArea = () => {
//   return (
//     <>
//       <header className="relative w-full">
//         <div className="relative w-full h-96 xl:h-screen">
//           <Image
//             src={HeaderImage}
//             alt="Picture of the author"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black opacity-80"></div>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               {/* Heading */}
//               <div className="mb-10 lg:mb-12">
//                 <h1 className="text-white text-xl md:text-3xl xl:text-5xl font-bold mb-2 lg:mb-3 uppercase space-x-24 mx-6 md:mx-12 lg:mx-40 drop-shadow-2xl">
//                   Marketing is Targeting minds,
//                 </h1>

//                 <h1 className="text-white text-xl md:text-3xl xl:text-5xl font-bold uppercase space-x-24 mx-6 md:mx-12 lg:mx-40">
//                   hitting wallets, embodying{" "}
//                   <span className="text-lime-500 inline-block animate-bounce mt-2 lg:mt-3">
//                     CashCramento
//                   </span>
//                 </h1>
//               </div>

//               <div className="space-x-4">
//                 {/* Sign up button */}
//                 <Link
//                   href="https://cashcramento.affise.com/v2/sign/up"
//                   className="bg-green-600 hover:bg-green-800 text-white text-sm lg:text-base px-6 lg:px-12 py-2 lg:py-3 rounded-md font-semibold transition duration-300 uppercase border border-solid border-white active:bg-red-500 duration-100"
//                 >
//                   Sing Up
//                 </Link>

//                 {/* Login button */}
//                 <Link
//                   href="https://cashcramento.affise.com/v2/sign/in"
//                   className="bg-white text-black text-sm lg:text-base px-6 lg:px-12 py-2 lg:py-3 hover:bg-gray-400 rounded-md font-semibold hover:scale-90 transition duration-300 uppercase active:bg-red-500 active:text-white duration-100"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HeroArea;
