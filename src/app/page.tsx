import Image from "next/image";
import { Playfair } from "next/font/google";

const playfair = Playfair({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">
      <div className={playfair.className}>
      <div className="text-3xl flex-col items-center justify-between p-24">Hi there, I'm Matthew Lee, BE(Hons)/BSc(Computer Science).<br/>
        Please take a look at some of my work below.
      </div> 
      <div>
        hello
      </div>
      </div>
    </main>
  );
}
