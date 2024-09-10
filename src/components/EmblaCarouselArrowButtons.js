export const addPrevNextBtnsClickHandlers = (emblaApi, prevBtn, nextBtn) => {
    const disablePrevNextBtns = () => {
      if (emblaApi.canScrollPrev()) {
        prevBtn.removeAttribute('disabled');
      } else {
        prevBtn.setAttribute('disabled', 'disabled');
      }
  
      if (emblaApi.canScrollNext()) {
        nextBtn.removeAttribute('disabled');
      } else {
        nextBtn.setAttribute('disabled', 'disabled');
      }
    };
  
    prevBtn.addEventListener('click', emblaApi.scrollPrev);
    nextBtn.addEventListener('click', emblaApi.scrollNext);
    emblaApi.on('select', disablePrevNextBtns);
    emblaApi.on('init', disablePrevNextBtns);
  
    return () => {
      prevBtn.removeEventListener('click', emblaApi.scrollPrev);
      nextBtn.removeEventListener('click', emblaApi.scrollNext);
      emblaApi.off('select', disablePrevNextBtns);
      emblaApi.off('init', disablePrevNextBtns);
    };
  };
  