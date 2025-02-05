import {
  Orbitron,
  Inria_Sans,
  Press_Start_2P,
  Bungee_Shade,
  Bungee_Inline,
  Space_Grotesk,
  Exo,
  Raleway,
  Poppins,
  Open_Sans,
} from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-openSans",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-orbitron",
});

export const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inriaSans",
});

export const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pressStart",
});

export const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungeeShade",
});

export const bungeeInline = Bungee_Inline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungeeInline",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-spaceGrotesk",
});

export const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-exo",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-raleway",
});
