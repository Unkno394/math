document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.up, .back, .pyp, .mulo, .ny, .slider-container2, .up2, .back2');
    
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
        threshold: 0.1, // Более чувствительный порог
        rootMargin: '0px 0px -50px 0px' // Небольшой отступ снизу
    });
  
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});