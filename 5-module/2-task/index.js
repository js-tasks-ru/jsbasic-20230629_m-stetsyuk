function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const textBlock = document.querySelector('#text');

  toggleButton.addEventListener('click', () => {
    textBlock.hidden = !textBlock.hidden;
  });
}
