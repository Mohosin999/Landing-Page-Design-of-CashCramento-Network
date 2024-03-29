import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CashCramento",
  description:
    "Generated by CashCramento. This is the most affiliate platform named cashcramento. This is the best CPA Network, top CPA Network in the world named cashcramento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="dark:bg-gray-900">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
      </body>
    </html>
  );
}

// import { Roboto } from "next/font/google";
// import "./globals.css";

// const roboto = Roboto({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "CashCramento",
//   description:
//     "Generated by CashCramento. This is the most affiliate platform named cashcramento. This is the best CPA Network, top CPA Network in the world named cashcramento.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>{children}</body>
//     </html>
//   );
// }
