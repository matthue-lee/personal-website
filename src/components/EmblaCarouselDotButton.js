export const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
    const dotNodes = Array.from(dotsNode.children);
  
    const activateDot = () => {
      const previousIndex = emblaApi.previousScrollSnap();
      const selectedIndex = emblaApi.selectedScrollSnap();
      dotNodes[previousIndex].classList.remove('is-selected');
      dotNodes[selectedIndex].classList.add('is-selected');
    };
  
    const addDotBtnClickHandlers = (dotNode, index) => {
      dotNode.addEventListener('click', () => emblaApi.scrollTo(index));
    };
  
    dotNodes.forEach(addDotBtnClickHandlers);
    emblaApi.on('select', activateDot);
    emblaApi.on('init', activateDot);
  
    return () => {
      dotNodes.forEach((dotNode, index) => {
        dotNode.removeEventListener('click', () => emblaApi.scrollTo(index));
      });
      emblaApi.off('select', activateDot);
      emblaApi.off('init', activateDot);
    };
  };
  