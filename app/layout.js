import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaRegCopyright } from "react-icons/fa6";

import {
  poppins,
  openSans,
  orbitron,
  inriaSans,
  pressStart,
  bungeeShade,
  bungeeInline,
  spaceGrotesk,
  exo,
  raleway,
} from "@/lib/fonts";

export const metadata = {
  title: "Elite Verse Agency",
  description: "Designed and Developed by Ubaid Sheikh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} ${orbitron.variable} ${inriaSans.variable} ${pressStart.variable} ${bungeeShade.variable} ${bungeeInline.variable} ${spaceGrotesk.variable} ${exo.variable} ${raleway.variable}`}
      >
        <div className="flex flex-col">
          <Header />
          {children}
          <div className="py-10">
            <Footer />
          </div>
          <hr className="border-white/15" />
          <div className="flex flex-col text-white justify-center items-center gap-2 py-10">
            <p className="flex gap-2 items-center justify-center text-[16px]">
              <FaRegCopyright />
              Copyright Elite Verse. All Rights Reserved
            </p>
            <p className="text-[14px]">Developed by <span className="text-mainyellow"><a href="https://wa.me/923219509045" target="_blank">Ubaid Sheikh</a></span></p>
          </div>
        </div>
      </body>
    </html>
  );
}
