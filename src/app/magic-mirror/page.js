import React from 'react'
import CodeBlock from '../../components/codeBlock'

export default function page() {
  return (
<div className="md:p-5 bg-white px-2">
  {/* Text Section */}
  <h3 className="font-bold text-gray-800 bg-white text-4xl">
    Magic-Mirror
  </h3>
  <p className="mt-1 text-gray-800 text-2xl">
    Inspired by sci-fi books, and motivated by a friend, I set out to create a website that would allow us to market and sell
    a magic-mirror we&aposd thrown together.
  </p>

  {/* Space below the text */}
  <div className="my-24"></div>

  {/* Full width image container */}
  <div className="w-full overflow-hidden">
    <img
      className="w-full h-auto"
      src="/images/coloredMirror.jpg"
      alt="Full Width Image"
    />
  </div>
  <div className="mt-12 text-center mx-auto max-w-4xl">
    <p className="mb-10 text-gray-700 text-2xl">
      This was immediately a hard task as I&aposd never really touched webDev before. After a bit of research I settled on using NextJs
      and Firebase for authentication. After a harrowing week full of chat gpt, stack overflow, and youtube, I had a functional login system.
      Throughout this process I learnt a huge range of skills, beginning with UI components. Having never touched CSS or HTML before I began 
      the painstaking process of placing and moving div&aposs. Finally making a box in the middle of the screen in what seemed to be the least intuitive
      coding language I&aposd ever used, I began to work on authentication. Authentication made all the boxes seem easy in comparison. With a lot of help from 
      youtube however, I managed to set up a user login system with Firebase.
    </p>

    <div className="flex flex-col md:flex-row md:items-start">
    {/* Second paragraph */}
    <p className="mb-10 mt-5 text-gray-700 md:w-2/3 text-2xl">
      During the process of making the login system I had the opportunity to become more familiar with project planning. I quickly realised that 
      the task I had set for myself was in fact pretty damn big. After a bit of research I settled on a combination of Jira and Notion. Using Jira
      drastically increased my work rate, as I quickly learnt to what to priorise and what to leave for later. A gantt chart overview helped me
      settle on the overall direction of my work, and plan my weeks out. 
    </p>

    {/* Images container */}
    <div className="md:w-1/3">
      <div className="w-[100vw] md:w-full overflow-hidden">
        <img
          className="w-full h-auto rounded-lg"
          src="/images/gantt.jpg"
          alt="First Image"
        />
        <img
          className="w-full h-auto rounded-lg mt-4 overflow-hidden"
          src="/images/board.png"
          alt="Second Image"
        />
      </div>
    </div>
  </div>







    <p className="mb-6 mt-5 text-gray-700">
      Third paragraph of text, which continues the explanation.
    </p>
    <div className="w-full">
  <pre className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-800 text-left w-full">
    {`
    AFS;DLKFA;LSKDJF CODE
    `}
  </pre>
</div>

  </div>
</div>
  )
}
