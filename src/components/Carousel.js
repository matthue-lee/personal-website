// components/Carousel.js
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../css/embla.css' // Adjust the path to your CSS

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src="/images/mm-home.png"
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
    </section>
  )
}

export default Carousel
