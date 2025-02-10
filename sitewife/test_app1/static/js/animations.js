document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-me");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Сбрасываем класс, если блок уходит
            }
        });
    }, { threshold: 0.3 });

    aboutSections.forEach(section => {
        observer.observe(section);
    });
});