ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
        center: [53.925841, 27.592531], // Координаты для центра карты (Москва), замените на координаты вашего офиса
        zoom: 15
    });

    // Создание метки с кастомной иконкой
    var myPlacemark = new ymaps.Placemark([53.925841, 27.592531], { // Замените координаты на координаты вашего офиса
        balloonContent: 'Ваш офис' // Текст, который появляется при клике на метку
    }, {
        iconLayout: 'default#image', // Используем кастомную иконку
        iconImageHref: '/static/test_app1/images/tag.png',
        iconImageSize: [50, 50], // Размер иконки
        iconImageOffset: [-15, -42] // Смещение иконки относительно координат
    });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
});