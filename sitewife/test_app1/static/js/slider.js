document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = Array.from(document.querySelectorAll(".carousel-item"));
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const indicatorsContainer = document.querySelector(".carousel-indicators");

    let currentIndex = 0;

    // Динамически создаём индикаторы
    indicatorsContainer.innerHTML = ""; // Очищаем, чтобы не дублировать
    items.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = Array.from(document.querySelectorAll(".indicator"));

    function updateCarousel() {
        // Применяем transform для прокрутки слайдов
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Обновляем классы активного элемента
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });

        // Обновляем индикаторы
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });

        // Показываем или скрываем кнопки, если достигли границ
        prevButton.style.display = currentIndex === 0 ? "none" : "flex";
        nextButton.style.display = currentIndex === items.length - 1 ? "none" : "flex";
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCarousel(); // Центрируем первый слайд при загрузке
});
