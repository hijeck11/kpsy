document.addEventListener("DOMContentLoaded", function () {
    // 1. Плавное появление about-me и about-me-combined
    const aboutSections = document.querySelectorAll(".about-me, .about-me-combined, .work-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    aboutSections.forEach(section => {
        observer.observe(section);
    });

    // 2. Анимация выезда только для .mainup
    const mainupSection = document.querySelector(".mainup");

    if (mainupSection) {
        const mainupObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        }, { threshold: 0.3 });

        mainupObserver.observe(mainupSection);
    }
});
