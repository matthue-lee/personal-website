import { useState } from 'react';

const AccordionItem = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hs-accordion ${isOpen ? 'active' : ''}`} id={id}>
      <button
        className={`hs-accordion-toggle py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 ${isOpen ? 'hs-accordion-active:text-blue-600 dark:hs-accordion-active:text-blue-500' : ''}`}
        aria-expanded={isOpen}
        onClick={toggleAccordion}
        aria-controls={`hs-basic-collapse-${id}`}
      >
        {/* Plus Icon */}
        <svg
          className={`${isOpen ? 'hidden' : 'block'} size-3.5`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>

        {/* Minus Icon */}
        <svg
          className={`${isOpen ? 'block' : 'hidden'} size-3.5`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
        </svg>

        {title}
      </button>
      <div
        id={`hs-basic-collapse-${id}`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? 'block' : 'hidden'}`}
        role="region"
        aria-labelledby={`hs-basic-heading-${id}`}
      >
        <p className="text-gray-800 dark:text-neutral-200">
          {content}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    { id: 'one', title: 'Accordion #1', content: 'This is the first accordion body content.' },
    { id: 'two', title: 'Accordion #2', content: 'This is the second accordion body content.' },
    { id: 'three', title: 'Accordion #3', content: 'This is the third accordion body content.' },
  ];

  return (
    <div className="hs-accordion-group">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
