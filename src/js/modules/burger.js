export function burger() {
  const burgerNav = document.querySelector('.nav-js');
  const burgerOpen = document.querySelector('.open-js');
  const burgerClose = document.querySelector('.close-js');

  const burgerAdd = () => {
    burgerNav.classList.add('active');
    burgerOpen.classList.add('active');
    burgerClose.classList.add('active');
  };

  const burgerRemove = () => {
    burgerNav.classList.remove('active');
    burgerOpen.classList.remove('active');
    burgerClose.classList.remove('active');
  };

  burgerOpen.addEventListener('click', burgerAdd);
  burgerClose.addEventListener('click', burgerRemove);
}
