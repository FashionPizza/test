const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const colorBtn = document.querySelector('#color-btn');
colorBtn.toggled = false;

colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = colorBtn.toggled ? '#f093f0' : '#0eff1a';
  colorBtn.toggled = !colorBtn.toggled;
});