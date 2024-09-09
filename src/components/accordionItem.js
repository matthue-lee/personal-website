import { useState } from 'react';

const AccordionItem = ({ id, title, content, isOpen, onClick }) => (
  <div className={`bg-white border rounded-xl ${isOpen ? 'border-gray-200' : 'border-transparent'} dark:bg-neutral-800 dark:border-transparent`}>
    <button
      className={`inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 ${isOpen ? 'text-blue-600 dark:text-blue-500' : ''}`}
      aria-expanded={isOpen}
      onClick={onClick}
      aria-controls={id}
    >
      {title}
      <svg
        className={`transition-transform ${isOpen ? 'hidden' : 'block'} w-6 h-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg
        className={`transition-transform ${isOpen ? 'block' : 'hidden'} w-6 h-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
      </svg>
    </button>
    <div
      id={id}
      className={`overflow-hidden transition-[height] duration-300 ${isOpen ? 'block' : 'hidden'}`}
      role="region"
    >
      <div className="pb-4 px-5">
        <p className="text-gray-800 dark:text-neutral-200">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default AccordionItem;
