import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PrelineScript from "@/components/PrelineScript";





const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio - Matthew Lee",
  description: "Created by Matthew Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={playfair.className}>
      <div className="min-h-screen md:border-[50px] md:border-emerald-950 bg-white">
      <header className="flex items-center w-full bg-white text-sm py-16 md:dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto flex items-center justify-between px-4 sm:px-2">
         <div className="flex flex-grow justify-center gap-4 md:gap-16">
            <a className="font-medium text-lg md:text-2xl  text-blue-500 focus:outline-none" href="/" aria-current="page">Home</a>
            <a className="font-medium text-lg md:text-2xl  text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Photography</a>
            <a className="font-medium text-lg md:text-2xl  text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Contact</a>
          </div>
        </nav>
      </header>
        {children}
        </div>
      </body>
      <PrelineScript/>
    </html>
  );
}
