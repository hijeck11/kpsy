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



//document.addEventListener("DOMContentLoaded", function () {
//    const aboutSections = document.querySelectorAll(".about-me");
//
//    const observer = new IntersectionObserver((entries) => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                entry.target.classList.add("show");
//                entry.target.classList.add("visible"); // Фикс для верхнего блока
//            } else {
//                // Убираем только если пользователь **прокрутил далеко вниз**
//                setTimeout(() => {
//                    if (!entry.isIntersecting && entry.target.classList.contains("visible")) {
//                        entry.target.classList.remove("show");
//                    }
//                }, 900); // Задержка перед скрытием (можно увеличить)
//            }
//        });
//    }, { threshold: 0.3 }); // Изменено на 0.6, чтобы не срабатывало слишком часто
//
//    aboutSections.forEach(section => {
//        observer.observe(section);
//    });
//});
//
