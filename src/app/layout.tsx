'use client'

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PrelineScript from "@/components/PrelineScript";
import { usePathname } from 'next/navigation';




const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"]})



export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
    <body className={playfair.className}>
      <div className="min-h-screen md:border-[50px] md:border-emerald-950 bg-white">
        <header className="flex items-center w-full bg-white text-sm py-16 md:dark:bg-neutral-800">
          <nav className="max-w-[85rem] w-full mx-auto flex items-center justify-between px-4 sm:px-2">
            <div className="flex flex-grow justify-center gap-4 md:gap-16">
              <a
                className={`font-medium text-lg md:text-2xl focus:outline-none ${
                  pathname === '/' ? 'text-emerald-800' : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
                }`}
                href="/"
              >
                Home
              </a>
              <a
                className={`font-medium text-lg md:text-2xl focus:outline-none ${
                  pathname === '/photography' ? 'text-emerald-800' : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
                }`}
                href="/photography"
              >
                Photography
              </a>
              <a
                className={`font-medium text-lg md:text-2xl focus:outline-none ${
                  pathname === '/modelling' ? 'text-emerald-800' : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
                }`}
                href="/modelling"
              >
                Modelling
              </a>
              <a
                className={`font-medium text-lg md:text-2xl focus:outline-none ${
                  pathname === '/contact' ? 'text-emerald-800' : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
                }`}
                href="/contact"
              >
                Contact
              </a>
            </div>
            {/* Logo Container */}
            <div className="flex-shrink-0 ml-auto">
              <img
                className="h-16 w-auto pulse-animation" // Doubled the size from h-8 to h-16
                src="/images/logo3.png"
                alt="Logo"
              />
            </div>
          </nav>
        </header>
        {children}
      </div>
    </body>
  </html>
    );
  }
