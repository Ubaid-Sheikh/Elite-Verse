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
  metadataBase: new URL("https://elite-verse.com"),
  title: "Elite Verse Agency - Web Development & Branding Services",
  description: "Elite Verse Agency specializes in designing and developing stunning websites for businesses and brands. Elevate your online presence with us!",
  keywords: "web development, branding, website design, business websites, agency, UI/UX, SEO, web services agency, elite verse, shaheer amir website, ubaid sheikh website, shopify store builder, website builder",
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/android-small.png",
    apple: "/img/apple-touch-icon.png",
  },
  author: [{ name: "Ubaid Sheikh" }, { name: "Shaheer Aamir" }],
  robots: "index, follow",
  openGraph: {
    title: "Elite Verse Agency - Web Development Experts",
    description:
      "We create high-performance websites for businesses & brands. Transform your digital presence with Elite Verse Agency.",
    url: "https://elite-verse.com",
    siteName: "Elite Verse Agency",
    images: [
      {
        url: "/img/Free Office Logo Mockup.png.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Verse Agency Banner",
      },
    ],
    type: "website",
  },
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
          <div className="py-10 mt-10">
            <Footer />
          </div>
          <hr className="border-white/15" />
          <div className="flex flex-col text-white justify-center items-center gap-2 py-10">
            <p className="flex gap-2 items-center justify-center text-[16px] font-bold">
              <FaRegCopyright />
              Copyright Elite Verse. All Rights Reserved
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
