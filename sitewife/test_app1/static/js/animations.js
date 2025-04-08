document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-me");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Убираем класс, если блок уходит из зоны видимости
            }
        });
    }, { threshold: 0.2 }); // Можно настроить порог видимости

    aboutSections.forEach(section => {
        observer.observe(section);
    });
});
