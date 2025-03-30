document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.b, .c, .d, .e, .f, .g');
    
    if (elementsToAnimate.length === 0) {
        console.warn('Анимируемые элементы не найдены');
        return;
    }
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // observer.unobserve(entry.target); // Можно раскомментировать для однократного срабатывания
            } else {
                entry.target.classList.remove('animate'); // Для повторной анимации при скролле назад
            }
        });
    }, {
        threshold: 0.2, // Более чувствительный порог
        rootMargin: '0px 0px -50px 0px' // Уменьшенный отступ
    });
  
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});