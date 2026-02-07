const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', () => {
  if (!colorBtn.classList.contains('green') && !colorBtn.classList.contains('purple')) {
    colorBtn.classList.add('green');
  } else if (colorBtn.classList.contains('green')) {
    colorBtn.classList.remove('green');
    colorBtn.classList.add('purple');
  } else {
    colorBtn.classList.remove('purple');
    colorBtn.classList.add('green');
  }
});