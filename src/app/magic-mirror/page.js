'use client'
import React, { useState, useRef, useEffect, useCallback} from 'react';
import Carousel from '../../components/Carousel'
import '../globals.css'

export default function Page() {

    //ACCORDION CONTENT
  const [activeIndex, setActiveIndex] = useState(null); // Active accordion index
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active accordion
  };

  const getAccordionHeight = (ref) => {
    return ref.current ? `${ref.current.scrollHeight}px` : '0px';
  };

  useEffect(() => {
    // Set height for the initially open accordion
    if (activeIndex === 1 && contentRef1.current) {
      contentRef1.current.style.height = getAccordionHeight(contentRef1);
    }
    if (activeIndex === 2 && contentRef2.current) {
      contentRef2.current.style.height = getAccordionHeight(contentRef2);
    }
    if (activeIndex === 3 && contentRef3.current) {
      contentRef3.current.style.height = getAccordionHeight(contentRef3);
    }
  }, [activeIndex]);


  return (
    <div className="md:p-10 lg:p-16 bg-white px-2 ">
      {/* Text Section */}
      <h3 className="font-bold text-gray-800 bg-white text-4xl">
        Magic-Mirror
      </h3>
      <p className="mt-1 text-gray-800 text-lg md:text-2xl md:pr-44">
        Inspired by sci-fi books, and motivated by a friend, I set out to create a website that would allow us to market and sell
        a magic-mirror we&#39;d thrown together.
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
      <div className="mt-20 text-center mx-auto max-w-4xl">
        <p className="mb-20 text-gray-700 text-lg md:text-2xl lg:text3xl text-justify px-16">
          This was immediately a hard task as I&#39;d never really touched webDev before. After a bit of research I settled on using NextJs
          and Firebase for authentication. After a harrowing week full of chat gpt, stack overflow, and youtube, I had a functional login system.
          Throughout this process I learnt a huge range of skills, beginning with UI components. Having never touched CSS or HTML before I began
          the painstaking process of placing and moving div&#39;s. Finally making a box in the middle of the screen in what seemed to be the least intuitive
          coding language I&#39;d ever used, I began to work on authentication. Authentication made all the boxes seem easy in comparison. With a lot of help from
          youtube however, I managed to set up a user login system with Firebase.
        </p>


      <div className="flex flex-col md:flex-row md:items-center">
      {/* Text Paragraph */}
      <p className="mb-10 mt-15 text-gray-700 md:w-2/3 text-lg md:text-2xl md:mr-8 text-justify">
        During the process of making the login system I had the opportunity to become more familiar with project planning. I quickly realised that
        the task I had set for myself was in fact pretty damn big. After a bit of research I settled on a combination of Jira and Notion. Using Jira
        drastically increased my work rate, as I quickly learnt to what to priorise and what to leave for later. A gantt chart overview helped me
        settle on the overall direction of my work, and plan my weeks out.
      </p>

      {/* Images Container */}
      <div className="md:w-1/2">
        <div className="w-full overflow-hidden">
          <img
            className="w-full h-auto rounded-lg"
            src="/images/gantt.jpg"
            alt="First Image"
          />
          <img
            className="w-full h-auto rounded-lg mt-4"
            src="/images/board.png"
            alt="Second Image"
          />
        </div>
      </div>
    </div>



        {/* third paragraph */}
      <div className="flex">
        {/* Third paragraph, 50% width */}
        <div className='mt-36 w-1/2 pr-4'>
          {/* ACCORDION */}
          <div className="hs-accordion-group">
            {/* Accordion #1 */}
            <div className={`hs-accordion ${activeIndex === 1 ? 'active' : ''}`} id="hs-basic-heading-one">
              <button
                onClick={() => handleToggle(1)}
                className={`hs-accordion-toggle ${
                  activeIndex === 1 ? 'text-emerald-700' : 'text-gray-800'
                } py-3 inline-flex items-center gap-x-3 w-full text-xlg font-semibold text-start hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg dark:text-neutral-200 dark:hover:text-neutral-400`}
                aria-expanded={activeIndex === 1}
                aria-controls="hs-basic-collapse-one"
              >
                {activeIndex === 1 ? (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                ) : (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                )}
                Linking Google Accounts
              </button>
              <div
                id="hs-basic-collapse-one"
                ref={contentRef1}
                style={{
                  height: activeIndex === 1 ? getAccordionHeight(contentRef1) : '0px',
                  transition: 'height 300ms ease',
                }}
                className="hs-accordion-content w-full overflow-hidden"
                role="region"
                aria-labelledby="hs-basic-heading-one"
              >
                <p className="text-gray-800 dark:text-neutral-200 text-sm md:text-base">
                  This was the easiest by far of the accounts to link, driven no doubt by the fact that firebase is a google product.
                  All that was required was to pass an Auth object to the firebase signInWithPopup function, and the rest is history

                </p>
                {/* CODE BLOCK */}
                <div className="w-full">
                  <pre className="bg-gray-200 p-4 rounded font-mono text-sm text-gray-800 text-left w-full">
                    {`
    const handleGoogleEmail = async (e) => {
      const provider = await new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/
      auth/gmail.readonly')
      console.log(userID)
      console.log(auth.currentUser)
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        addUser()
      })
    }
                    `}
                  </pre>
                </div>
              </div>
            </div>

            {/* Accordion #2 */}
            <div className={`hs-accordion ${activeIndex === 2 ? 'active' : ''}`} id="hs-basic-heading-two">
              <button
                onClick={() => handleToggle(2)}
                className={`hs-accordion-toggle ${
                  activeIndex === 2 ? 'text-emerald-700' : 'text-gray-800'
                } py-3 inline-flex items-center gap-x-3 w-full text-xlg font-semibold text-start hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg dark:text-neutral-200 dark:hover:text-neutral-400`}
                aria-expanded={activeIndex === 2}
                aria-controls="hs-basic-collapse-two"
              >
                {activeIndex === 2 ? (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                ) : (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                )}
                Linking Microsoft accounts
              </button>
              <div
                id="hs-basic-collapse-two"
                ref={contentRef2}
                style={{
                  height: activeIndex === 2 ? getAccordionHeight(contentRef2) : '0px',
                  transition: 'height 300ms ease',
                }}
                className="hs-accordion-content w-full overflow-hidden"
                role="region"
                aria-labelledby="hs-basic-heading-two"
              >
                <p className="text-gray-800 dark:text-neutral-200 text-sm md:text-base">
                  Linking the users Microsoft account thankfully followed a similar process as the google accounts, 
                  so I was able to connect both emails and calendars without too much trouble.
                </p>
                <div className="w-full">
                  <pre className="bg-gray-200 p-4 rounded font-mono text-sm text-gray-800 text-left w-full">
                    {`
    const handleOutlookEmail = async (e) => {
      const provider = new OAuthProvider('microsoft.com');
      provider.addScope('mail.read');
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = 
          OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
      })
      .catch((error) => {
        console.log('there was an error', error)
      });
    }

                    `}
                  </pre>
                </div>
              </div>
            </div>

            {/* Accordion #3 */}
            <div className={`hs-accordion ${activeIndex === 3 ? 'active' : ''}`} id="hs-basic-heading-three">
              <button
                onClick={() => handleToggle(3)}
                className={`hs-accordion-toggle ${
                  activeIndex === 3 ? 'text-emerald-700' : 'text-gray-800'
                } py-3 inline-flex items-center gap-x-3 w-full text-xlg font-semibold text-start hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg dark:text-neutral-200 dark:hover:text-neutral-400`}
                aria-expanded={activeIndex === 3}
                aria-controls="hs-basic-collapse-three"
              >
                {activeIndex === 3 ? (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                ) : (
                  <svg className="block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                )}
                Linking Spotify
              </button>
              <div
                id="hs-basic-collapse-three"
                ref={contentRef3}
                style={{
                  height: activeIndex === 3 ? getAccordionHeight(contentRef3) : '0px',
                  transition: 'height 300ms ease',
                }}
                className="hs-accordion-content w-full overflow-hidden"
                role="region"
                aria-labelledby="hs-basic-heading-three"
              >
                <p className="text-gray-800 dark:text-neutral-200 text-sm md:text-base" >
                  Linking the spotify account proved a far harder beast altogether. Although the spotify API docs were robust, I struggled
                  a lot with understanding how tokens could be passed around and handled. Eventually I came up with a solution that worked,
                  as shown below
                </p>
                <div className="w-[60%]">
                  <pre className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-800 text-left w-full">
                    {`
                    AFS;DLKFA;LSKDJF CODE
                    `}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-36 text-gray-700 text-lg md:text-2xl text-justify">
          With all the planning out of the way it was time to get down into the nitty gritty, finding a way
          to allow users to link their accounts, such that their emails and calendars could be displayed on the mirror
        </p>
      </div>

        {/* Fourth paragraph */}
      <p className="mb-5 mt-36 md:px-10 text-gray-700 text-lg md:text-2xl text-justify">
          The next move for me after setting up the linked accounts was to make a landing page so people would be able to look at our product.
          It probably wasn&#39;t entirely necessary as we don&#39;t intend to market as a product online any time soon, but I figured
          that it would be a good opportunity to learn some more design oriented dev skills. I figured out my way around Preline, NextUI,
          and a couple of other component plugins to finally make a couple of pages more aimed towards selling
        </p>

      {/* CAROUSEL */}
      <Carousel/>

      </div>



    </div>
  )
}
