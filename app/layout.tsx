import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const creatoDisplay = localfont({
  src: [
    {
      path: "./assets/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "extrabold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "bold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Regular.otf",
      weight: "100",
      style: "normal",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Medium.otf",
      weight: "400",
      style: "medium",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Regular.otf",
      weight: "300",
      style: "semi-bold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Light.otf",
      weight: "200",
      style: "light",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Urban",
  description: "Urban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={creatoDisplay.className}>{children}</body>
    </html>
  );
}
