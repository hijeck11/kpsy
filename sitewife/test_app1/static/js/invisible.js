document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-rights-btn');
    const rightsContent = document.querySelector('.rights-content');

    toggleButton.addEventListener('click', function () {
        if (rightsContent.classList.contains('show')) {
            rightsContent.style.maxHeight = null; // Закрываем блок
        } else {
            rightsContent.style.maxHeight = rightsContent.scrollHeight + "px"; // Устанавливаем высоту контента
        }
        rightsContent.classList.toggle('show');
    });
});
