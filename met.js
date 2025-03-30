document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.c, .d, .f, .g, .q, .w');
    
    if (elementsToAnimate.length === 0) {
      console.error('Элементы не найдены!');
      return;
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });