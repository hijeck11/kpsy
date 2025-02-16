document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const items = Array.from(carousel.querySelectorAll(".carousel-item"));
        const prevButton = carousel.querySelector(".carousel-control.prev");
        const nextButton = carousel.querySelector(".carousel-control.next");
        const indicatorsContainer = carousel.querySelector(".carousel-indicators");

        let currentIndex = 0;

        // Создание индикаторов
        indicatorsContainer.innerHTML = ""; // Чистим старые индикаторы
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

        const indicators = Array.from(carousel.querySelectorAll(".indicator"));

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            items.forEach((item, index) => {
                item.classList.toggle("active", index === currentIndex);
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === currentIndex);
            });

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

        updateCarousel(); // Центрируем первый слайд
    });
});

