document.addEventListener('DOMContentLoaded', function() {
    const reviewItems = document.querySelectorAll('.review-item');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');

    // Добавляем модальное окно в DOM
    modal.classList.add('modal');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    let isModalOpen = false;

    // Функция для открытия/закрытия модального окна
    function toggleModal(event) {
        if (isModalOpen) {
            // Если модальное окно открыто, закрываем его
            modal.classList.remove('active');
            isModalOpen = false;
        } else {
            // Если модальное окно закрыто, открываем его
            const src = event.target.src; // Получаем источник изображения
            modalImage.src = src; // Устанавливаем источник в модальное окно
            modal.classList.add('active'); // Показываем модальное окно
            isModalOpen = true;
        }
    }

    // Добавляем обработчик клика на каждое изображение для открытия/закрытия в модальном окне
    reviewItems.forEach(item => {
        item.addEventListener('click', toggleModal);
    });

    // Добавляем обработчик клика по модальному окну для его закрытия
    modal.addEventListener('click', function() {
        modal.classList.remove('active');
        isModalOpen = false;
    });

    // Добавляем обработчик для предотвращения закрытия при клике на изображение
    modalImage.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие, чтобы не закрыть модальное окно
        // Для того чтобы изображение уменьшалось, если оно уже открыто:
        modal.classList.remove('active'); // Скрываем модальное окно
        isModalOpen = false; // Обновляем флаг состояния модального окна
    });
});
