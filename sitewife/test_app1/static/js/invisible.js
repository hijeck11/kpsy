const rightsContent = document.querySelector('.rights-content');
const btn = document.querySelector('.toggle-rights-btn');

btn.addEventListener('click', () => {
  if (rightsContent.classList.contains('show')) {
    rightsContent.style.maxHeight = 0;
    rightsContent.classList.remove('show');
  } else {
    rightsContent.style.maxHeight = rightsContent.scrollHeight + 'px';
    rightsContent.classList.add('show');
  }
});
