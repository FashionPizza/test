const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', () => {
  const isGreen = colorBtn.classList.toggle('green');
  colorBtn.classList.toggle('purple', !isGreen);
});