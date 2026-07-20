document.addEventListener('pointerup', event => {
  const button = event.target.closest('.button');

  if (button) {
    button.blur();
  }
});
