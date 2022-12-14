//validation
export function validation() {
  const form = document.getElementById('form');

  const formAddError = (input) => {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  };
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  };

  const emailTest = (input) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  };

  const numberTest = (input) => {
    return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value);
  };

  const formValidate = (form) => {
    let error = 0;

    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('name')) {
        if (input.value.length <= 6) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('phone')) {
        if (numberTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  };

  const formSend = (e) => {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      alert('Форма отправлена');
    } else {
      alert('Заполните все поля');
    }
  };

  form.addEventListener('submit', formSend);
}
