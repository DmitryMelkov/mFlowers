export function lang() {
  const languages = document.querySelectorAll('.lang-btn-js');

  languages.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      if (!currentBtn.classList.contains('active')) {
        languages.forEach(function (item) {
          item.classList.remove('active');
        });
        currentBtn.classList.add('active');
      }
    });
  });
}
