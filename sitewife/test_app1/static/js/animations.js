document.addEventListener("DOMContentLoaded", function() {
    const aboutSections = document.querySelectorAll(".about-me, .about-me-combined, .work-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.2) {  // Было 0.5, теперь 0.2 (появляется раньше)
                entry.target.classList.add("show");
            } else if (entry.intersectionRatio < 0.05) {  // Было 0.1, теперь 0.05 (исчезает позже)
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: [0.05, 0.2, 0.5]  // Более плавные границы срабатывания
    });

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
