document.addEventListener("DOMContentLoaded", () => {
    // Список всех элементов, которые нужно анимировать
    const elementsToAnimate = document.querySelectorAll(`
        .back2, .up2, .controls2, .slide2, .slider2, .slider-container2, .qwq,
        .back, .up, .controls, .slide, .slider, .slider-container, .coco, .popa, .bb
    `);
    
    // Проверяем, что элементы существуют
    if (elementsToAnimate.length === 0) {
        console.error('Не найдены элементы для анимации!');
        return;
    }

    // Создаем observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс с анимацией
                entry.target.classList.add('animate');
                // Можно раскомментировать следующую строку, чтобы анимация срабатывала только один раз
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Начинаем наблюдение
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});