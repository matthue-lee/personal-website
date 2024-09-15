import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className='text-3xl text-additional px-8 text-center'>
        Designing an Under-Actuated Gripper
      </div>
      <div className="container mx-auto px-10">
        {/* First Section: Text on the right, Image on the left */}
        <section className="flex items-center my-8 pt-16">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl mb-2">Goals</h2>
            <p className="text-lg">The goal of this project was simple, the execution less so.
              We had to create an underatuated gripper, broadly this means an object with less motors than DOF&#39;s, specifically we had one motor to use; 
              that would be able to grip and lift objects from a washer to drills and chains. 
            </p>
          </div>
          <div className="flex-1">
          <div className="relative h-60 w-full"> {/* Adjust height as needed */}
              <Image
                src="/content/objects.png"
                alt="Gripper Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        {/* Second Section: Image on the left, Text on the right */}
        <section className="flex items-center my-8 pt-16">
        <div className="flex-1">
          <div className="relative h-60 w-full"> {/* Adjust height as needed */}
              <Image
                src="/content/diffs.png"
                alt="Gripper Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl mb-2">Differentials</h2>
            <p className="text-lg">The main way for an object to be underactuated is through the use of differentials.
              With our team we settled on using a wiffle-tree differential, stacked to allow the four fingers to move independantly,
              and a pulley to provide power to the thumb. 
            </p>
          </div>
        </section>

        <section className="flex items-center my-8 pt-16">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl mb-2">Gripping small objects</h2>
            <p className="text-lg">Our group had picked to use an anthropomorphic design due to all of us studying Biomedical engineering, this lended itself
              quite naturally to a type of &#39;fingernail&#39; that would allow it to grasp the smaller objects.</p>
          </div>
          <div className="flex-1">
          <div className="relative h-60 w-full"> {/* Adjust height as needed */}
              <Image
                src="/content/finger.png"
                alt="Gripper Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center my-8 pt-16">
        <div className="flex-1">
          <div className="relative h-60 w-full"> {/* Adjust height as needed */}
              <Image
                src="/content/full assembly.png"
                alt="Gripper Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl mb-2">DOF&#39;s and ROM</h2>
            <p className="text-lg">.</p>
          </div>
        </section>
        <section className="flex items-center my-8 pt-16">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl mb-2">Manufacturing</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex-1">
          <div className="relative h-60 w-full"> {/* Adjust height as needed */}
              <Image
                src="/content/gipper 1.jpg"
                alt="Gripper Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
