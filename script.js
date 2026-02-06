const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const colorChangeBtn = document.getElementById('color-change-btn');
const colors = ['#f093f0', '#0eff1a'];

colorChangeBtn.toggled = false;

colorChangeBtn.addEventListener('click', () => {
  colorChangeBtn.style.backgroundColor = colors[+colorChangeBtn.toggled];
  colorChangeBtn.toggled = !colorChangeBtn.toggled;
});