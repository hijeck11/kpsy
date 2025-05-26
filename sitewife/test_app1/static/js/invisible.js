document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-rights-btn');
    const rightsContent = document.querySelector('.rights-content');

    toggleButton.addEventListener('click', function () {
        rightsContent.classList.toggle('show');
    });
});

