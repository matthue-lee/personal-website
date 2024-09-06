import Image from "next/image";
import { Playfair } from "next/font/google";
import Link from "next/link";

const playfair = Playfair({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="text-3xl flex justify-start p-24">
        Hi there, I'm Matthew Lee, BE(Hons)/BSc(Computer Science).<br />
        Please take a look at some of my work below.
      </div>
      <div className="flex-grow flex flex-col items-center">
        {/* Large Card */}
        <a href="/target-page" className="relative block bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 w-[60%] cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
          <div className="absolute top-0 left-0 right-0">
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">
                Magic-Mirror
              </h3>
              <p className="mt-1 text-gray-800">
                A fullstack development learning experience.
              </p>
              {/* <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
                Last updated 5 mins ago
              </p> */}
            </div>
          </div>
        </a>
        {/* Small Cards */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-40 mb-8 w-[80%]">
          <a href="/target-page-2" className="relative block bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Spectral Analysis
                </h3>
                <p className="mt-1 text-gray-800">
                  A foray into machine learning and SVM's
                </p>
              </div>
            </div>
          </a>
          <a href="/target-page-3" className="relative block bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Underactuated Gripper
                </h3>
                <p className="mt-1 text-gray-800">
                  Biomechanical analsysis and top of the class anthropomorphic design
                </p>
              </div>
            </div>
          </a>
          <a href="/target-page-4" className="relative block bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Holographic Imaging
                </h3>
                <p className="mt-1 text-gray-800">
                  Developing a numerical algorithm for accelerated imaging using Gabor in-line holography
                </p>
              </div>
            </div>
          </a>
          <a href="/target-page-5" className="relative block bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Surfboard Rack
                </h3>
                <p className="mt-1 text-gray-800">
                  A test of my design and creative skills, and practial application of CAD I'd learnt.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
);
}
    