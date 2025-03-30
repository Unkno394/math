document.addEventListener("DOMContentLoaded", () => {
    // Ждем полной загрузки всех ресурсов
    window.addEventListener('load', function() {
        const elementsToAnimate = document.querySelectorAll('.cub, .mama, .wbnfnf, .bub, .school, .uwu, .foo, .cved, .adress, .username');
        
        // Проверяем, что элементы существуют
        if (elementsToAnimate.length === 0) {
            console.error('Не найдены элементы для анимации!');
            return;
        }

        // Создаем observer с более гибкими настройками
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    // Можно раскомментировать следующую строку, чтобы анимация срабатывала только один раз
                    // observer.unobserve(entry.target);
                } else {
                    // Раскомментируйте, если хотите, чтобы элементы скрывались при скролле назад
                    // entry.target.classList.remove('show');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Срабатывает немного раньше
        });

        // Начинаем наблюдение
        elementsToAnimate.forEach(element => {
            observer.observe(element);
            // Удалена строка с добавлением рамки
        });
        
        console.log('Наблюдаем за элементами:', elementsToAnimate);
    });
});





