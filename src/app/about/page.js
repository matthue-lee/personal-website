'use client'

import Image from 'next/image';
import { source_serif } from '../fonts';

export default function AboutPage() {
  return (
    <>
      {/* Main section with image and text */}
      <section className="relative h-screen bg-white">
        {/* Text container overlapping the image */}
        <div className="absolute left-0 top-1/4 md:top-1/4 flex items-center px-6 sm:px-8 md:px-10 lg:px-16 z-10">
          <div className="bg-white/70 p-6 rounded-md inline-block">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="font-bold">kia ora,</span> <br /> my name is matthew lee
            </h1>
          </div>
        </div>

        {/* Image positioned absolutely on the right */}
        <div className="absolute top-0 right-0 h-full w-full md:w-2/3 z-0">
          <Image
            src="/images/about.jpg" // Replace with the correct path
            alt="Background event"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </section>

      {/* Full-width paragraph below the existing section */}
      <div className={`${source_serif.className} w-full px-6 md:px-48 lg:px-50 py-12`}>
      <div className="text-justify max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
            I&#39;m a dedicated and passionate individual with a strong interest in technology and innovation. 
            I thrive in dynamic environments where I can apply my skills 
            to solve complex problems and contribute to meaningful projects. 
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            With a blend of technical expertise and hands-on experience, I enjoy tackling new challenges
            and continuously growing as both a developer and a team player.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Feel free to take a look around my website at some of the projects I&#39;ve done,
            but if you&#39;d rather a traditional Cover Letter and CV, I&#39;ve got them here:
          </p>
          <div className="flex justify-center mt-4 space-x-8">
            {/* CV Link */}
            <a href="/content/CV Matthew Lee.pdf" target="_blank" className="flex items-center">
              <img 
                src="/images/PDF_file_icon.png" 
                alt="PDF icon" 
                className="w-5 h-5 mr-2" 
              />
              <span className="text-primary hover:text-accent underline text-lg">CV</span>
            </a>
            
            {/* Cover Letter Link */}
            <a href="/content/Cover Letter Matthew Lee.pdf" target="_blank" className="flex items-center">
              <img 
                src="/images/PDF_file_icon.png" 
                alt="PDF icon" 
                className="w-5 h-5 mr-2" 
              />
              <span className="text-primary hover:text-accent underline text-lg">Cover Letter</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

