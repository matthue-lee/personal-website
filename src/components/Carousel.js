// components/Carousel.js
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../css/embla.css'; // Adjust the path to your CSS

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [dots, setDots] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Initialize dots
    const slides = emblaApi.slideNodes();
    const newDots = slides.map((_, index) => ({
      active: false,
      index
    }));
    setDots(newDots);

    const updateDots = () => {
      const index = emblaApi.selectedScrollSnap();
      setDots(prevDots =>
        prevDots.map(dot => ({
          ...dot,
          active: dot.index === index
        }))
      );
    };

    updateDots(); // Initial update
    emblaApi.on('select', updateDots); // Update dots on slide change
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src="/images/MM-home.png"
              alt="Home"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src="/images/mm-about.png"
              alt="About"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src="/images/mm-contact.png"
              alt="Contact"
            />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <button className="embla__button embla__button--prev" onClick={scrollPrev} type="button">
          Prev
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext} type="button">
          Next
        </button>
      </div>

      <div className="embla__dots">
        {dots.map(dot => (
          <button
            key={dot.index}
            className={`embla__dot ${dot.active ? 'embla__dot--active' : ''}`}
            onClick={() => emblaApi.scrollTo(dot.index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
