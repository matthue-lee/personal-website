'use client'

import { Inter, Playfair_Display, Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PrelineScript from "@/components/PrelineScript";
import { usePathname } from 'next/navigation';

const playfair = Playfair_Display({ subsets: ["latin"] });
const oswald = Oswald({ subsets:["latin"]})
const source_serif = Source_Serif_4({ subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className="min-h-screen md:border-[30px] md:border-additional bg-white">
          <header className="flex items-center w-full bg-white text-sm py-2 md:dark:bg-neutral-800">
            <nav className="max-w-[85rem] w-full mx-auto flex items-center justify-between px-4 sm:px-2">
              <div className="flex flex-grow justify-end gap-2 md:gap-5 pr-10"> {/* Changed justify-start to justify-end and reduced the gap */}
                <a
                  className={`font-medium text-sm md:text-lg focus:outline-none ${
                    pathname === '/' ? 'text-accent thin-underline' : 'text-primary hover:text-accent dark:text-neutral-400 dark:hover:text-neutral-500'
                  }`}
                  href="/"
                >
                  Projects
                </a>
                <a
                  className={`font-medium text-sm md:text-lg focus:outline-none ${
                    pathname === '/about' ? 'text-accent thin-underline' : 'text-primary hover:text-accent dark:text-neutral-400 dark:hover:text-neutral-500'
                  }`}
                  href="/about"
                >
                  About
                </a>
                <a
                  className={`font-medium text-sm md:text-lg focus:outline-none ${
                    pathname === '/modelling' ? 'text-accent thin-underline' : 'text-primary hover:text-accent dark:text-neutral-400 dark:hover:text-neutral-500'
                  }`}
                  href="/modelling"
                >
                  Modelling
                </a>
                <a
                  className={`font-medium text-sm md:text-lg focus:outline-none ${
                    pathname === '/photography' ? 'text-accent thin-underline' : 'text-primary hover:text-accent dark:text-neutral-400 dark:hover:text-neutral-500'
                  }`}
                  href="/photography"
                >
                  Photography
                </a>
                {/* <a
                  className={`font-medium text-sm md:text-lg focus:outline-none ${
                    pathname === '/contact' ? 'text-accent thin-underline' : 'text-primary hover:text-accent dark:text-neutral-400 dark:hover:text-neutral-500'
                  }`}
                  href="/contact"
                >
                  Contact
                </a> */}
              </div>
              {/* Logo Container */}
              <div className="flex-shrink-0 ml-auto">
                <img
                  className="h-16 w-auto pulse-animation hidden sm:block"
                  src="/images/logo3.png"
                  alt="Logo"
                />
              </div>
            </nav>
          </header>
          {children}
          <footer className="w-full bg-stone-100 py-8 mt-8">
            <div className="max-w-[85rem] w-full mx-auto text-center">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Matthew Lee. All Rights Reserved.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a href="https://github.com/matthue-lee" target="_blank" className="text-primary hover:text-accent">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/matthew-lee-93a73b15b/" target="_blank" className="text-primary hover:text-accent">
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
          <PrelineScript/>
        </div>
      </body>
    </html>
  );
}
