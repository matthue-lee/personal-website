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
        <section className="flex items-center my-8">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        <section className="flex items-center my-8">
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
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </section>

        <section className="flex items-center my-8">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

        <section className="flex items-center my-8">
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
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </section>
        <section className="flex items-center my-8">
          <div className="flex-1 text-left pr-4">
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
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
