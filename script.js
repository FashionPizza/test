const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const changeColorBtn = document.getElementById('change-color-btn');
const toggleColors = ['#f093f0', '#0eff1a'];

changeColorBtn.toggled = false;

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.style.backgroundColor = toggleColors[+changeColorBtn.toggled];
  changeColorBtn.toggled = !changeColorBtn.toggled;
});