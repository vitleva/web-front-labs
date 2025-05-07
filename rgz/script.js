function toggleNews(button) {
  const moreText = button.previousElementSibling.querySelector('.more');
  if (moreText.classList.contains('hidden')) {
    moreText.classList.remove('hidden');
    button.textContent = "Скрыть";
  } else {
    moreText.classList.add('hidden');
    button.textContent = "Показать полностью";
  }
}