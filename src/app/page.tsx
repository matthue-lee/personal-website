import { Playfair } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Matthew Lee",
  description: "Created by Matthew Lee",
};

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 44%, #d6d3d1 44%)",
      }}
    >
      <div className="text-xl md:text-3xl flex justify-start p-5 md:p-24 text-gray-950">
        Hi there, I&#39;m Matthew Lee, BE(Hons)/BSc(Computer Science).<br />
        Please take a look at some of my work below.
      </div>
      <div className="flex-grow flex flex-col items-center">
        {/* Large Card */}
        <a 
          href="/magic-mirror" 
          className="relative block bg-white border shadow-sm rounded-xl p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-full md:w-[60%] z-10"
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <img 
                className="w-full max-h-[300px] object-cover rounded-xl" 
                src="/content/smartmirror.png" 
                alt="Card Image"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl">
              <div className="text-center text-white">
                <h3 className="text-lg font-bold">
                  Magic-Mirror
                </h3>
                <p className="mt-1">
                  A fullstack development learning experience.
                </p>
              </div>
            </div>
          </div>
        </a>


       {/* Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 mt-40 mb-8 w-[80%]">
          <a href="/spectral-analysis" className="relative block bg-emerald-950 border shadow-sm rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="p-16 border-4 border-emerald-950 rounded-lg overflow-hidden">
            <img className="w-full h-auto rounded-xl" src="/content/sbm.jpg" alt="Card Image"/>
            </div>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-3 md:p-5">
                <h3 className="text-lg font-bold text-gray-300">
                  Spectral Analysis
                </h3>
                <p className="mt-1 text-gray-300">
                  A foray into machine learning and SVM&#39;s
                </p>
              </div>
            </div>
          </a>
          <a href="/underactuated-gripper" className="relative block bg-emerald-950 border shadow-sm rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <div className="p-16 border-4 border-emerald-950 rounded-lg overflow-hidden">
            <img className="w-full h-auto rounded-xl" src="/content/gipper 1.jpg" alt="Card Image"
            style={{ maxHeight: '300px' }}/>
          </div>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-3 md:p-5">
                <h3 className="text-lg font-bold text-gray-300">
                  Underactuated Gripper
                </h3>
                <p className="mt-1 text-gray-300">
                  Biomechanical analsysis and top of the class anthropomorphic design
                </p>
              </div>
            </div>
          </a>
          <a href="/holography" className="relative block bg-emerald-950 border shadow-sm rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <div className="p-16 border-4 border-emerald-950 rounded-lg overflow-hidden">
            <img className="w-full h-auto rounded-xl mt-5" src="/content/p4p.png" alt="Card Image"/>
            </div>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-3 md:p-5">
                <h3 className="text-lg font-bold text-gray-300">
                  Holographic Imaging
                </h3>
                <p className="mt-1 text-gray-300">
                  A numerical algorithm for imaging using Gabor in-line holography
                </p>
              </div>
            </div>
          </a>
          <a href="/surfboard-rack" className="relative block bg-emerald-950 border shadow-sm rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <div className="p-16 border-4 border-emerald-950 rounded-lg overflow-hidden">
            <img className="w-full h-auto mt-5 rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
          </div>
            <div className="absolute top-0 left-0 right-0">
              <div className="p-3 md:p-5">
                <h3 className="text-lg font-bold text-gray-300">
                  Surfboard Rack
                </h3>
                <p className="mt-1 text-gray-300">
                  A real test of my design skills, and a chance to practice CAD
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
);
}
    