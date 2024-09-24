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
    >
      <div className="text-xl md:text-3xl lg:text-4xl flex justify-start p-5 md:p-24 text-gray-950">
        {/* Hi there, I&#39;m Matthew Lee, BE(Hons)/BSc(Computer Science).<br /> */}
        A mixture of design and software projects I&#39;m proud of.
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
                className="w-full max-h-[500px] object-cover rounded-xl" 
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
  <a href="/spectral-analysis" className="block rounded-xl p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-start">
      <img className="w-full h-auto rounded-xl" src="/content/sbm.jpg" alt="Card Image" />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-additional">Spectral Analysis</h3>
        <p className="mt-1 text-additional">A foray into machine learning and SVM&#39;s</p>
      </div>
    </div>
  </a>

  <a href="/underactuated-gripper" className="block rounded-xl p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-start">
      <img className="w-full h-auto rounded-xl" src="/content/full assembly.png" alt="Card Image" style={{ maxHeight: '300px' }} />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-additional">Underactuated Gripper</h3>
        <p className="mt-1 text-additional">Biomechanical analysis and top of the class anthropomorphic design</p>
      </div>
    </div>
  </a>

  <a href="/holography" className="block rounded-xl p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-start">
      <img className="w-full h-auto rounded-xl mt-5" src="/content/p4p.png" alt="Card Image" />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-additional">Holographic Imaging</h3>
        <p className="mt-1 text-additional">A numerical algorithm for imaging using Gabor in-line holography</p>
      </div>
    </div>
  </a>

  <a href="/surfboard-rack" className="block rounded-xl p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-start">
      <img className="w-full h-auto mt-5 rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image" />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-additional">Surfboard Rack</h3>
        <p className="mt-1 text-additional">A real test of my design skills, and a chance to practice CAD</p>
      </div>
    </div>
  </a>
</div>


      </div>
    </main>
);
}
    