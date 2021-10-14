const initValidationForm = () => {
  let form_input = document.querySelectorAll(' form input');
  let form_select = document.querySelectorAll(' form select');
  let form = document.querySelector('form ');
  let form_accord = document.querySelector('#accord');
  let key = null;
  form.addEventListener('submit', () => {
    let countCorrectFills = document.querySelectorAll('.done').length;
    if (!form_accord.checked || countCorrectFills !== 6) {
      event.preventDefault();
    }
  });
  form_input.forEach((item) => {
    item.addEventListener('change', changeInputHandler);
    item.addEventListener('focus', focusInputHandler);
    item.addEventListener('blur', blurInputHandler);
  });
  form_select.forEach((item) => {
    item.addEventListener('change', changeInputHandler);
  });
  function changeInputHandler(e) {
    let current_id = e.target.id;
    switch (current_id) {
      case 'accord':
        break;
      case 'name':
        validateName(e.target);
        break;
      case 'passw':
        validatePassword(e.target);
        break;
      case 'email':
        validateEmail(e.target);
        break;
      case 'day':
        validateDay(e.target);
        break;
      case 'month':
        validateMonth(e.target);
        break;
      case 'year':
        validateYear(e.target);
        break;
    }
  }
  const validateName = (current_el) => {
    let value = current_el.value;
    if (value) {
      if (value.length < 3 || value.length > 13 || /\d/.test(value)) {
        addClassWrong(current_el, '.form_name');
        addFormIcon();
      } else {
        addClassDone(current_el, '.form_name');
        addFormIcon('done');
      }
    } else {
      cleanElement(current_el, '.form_name', 'name');
    }
  };
  const validatePassword = (current_el) => {
    let value = current_el.value;
    if (value) {
      if (value.length < 8 || value.length > 25) {
        addClassWrong(current_el, '.form_passw');
      } else {
        addClassDone(current_el, '.form_passw');
      }
    } else {
      cleanElement(current_el, '.form_passw');
    }
  };
  const validateEmail = (current_el) => {
    let value = current_el.value;
    if (value) {
      if (value.search('@') < 0) {
        addClassWrong(current_el, '.form_email_status');
      } else {
        addClassDone(current_el, '.form_email_status');
      }
    } else {
      cleanElement(current_el, '.form_email_status');
    }
  };
  const validateMonth = (current_el) => {
    let value = current_el.value;
    let day_value = document.querySelector('#day').value;
    if (day_value && new Date(2021, Math.trunc(value), Math.trunc(day_value), 0, 0, 0, 0).getMonth() !== Math.trunc(value)) {
      addClassWrong(current_el, '.form_date_status');
    } else {
      addClassDone(current_el, '.form_date_status');
    }
  };
  const validateDay = (current_el) => {
    let value = current_el.value;
    let month_value = document.querySelector('#month').value;
    if (month_value && new Date(2021, month_value, Math.trunc(value), 0, 0, 0, 0).getDay() !== Math.trunc(value)) {
      addClassWrong(current_el, '.form_date_status');
    } else {
      addClassDone(current_el, '.form_date_status');
    }
  };
  const validateYear = (current_el) => {
    let value = current_el.value;
    if (+(new Date().getFullYear()) - 18 < value) {
      addClassWrong(current_el, '.form_date_year');
    } else {
      addClassDone(current_el, '.form_date_year');
    }
  };
  const addClassWrong = (current_el, tipName = '') => {
    if (tipName !== '') {
      let wrong_tip = document.querySelector(tipName);
      wrong_tip.classList.remove('hidden');
    }
    if (!current_el.classList.contains('wrong')) {
      current_el.classList.add('wrong');
      current_el.classList.remove('done');
    }
  };
  const addClassDone = (current_el, tipName) => {
    if (tipName !== '') {
      let wrong_tip = document.querySelector(tipName);
      wrong_tip.classList.add('hidden');
    }
    if (!current_el.classList.contains('done')) {
      current_el.classList.add('done');
      current_el.classList.remove('wrong');
    }
  };
  const addFormIcon = (action = 'wrong') => {
    let wrong_icon = document.querySelector('.form_wrong_icon');
    let done_icon = document.querySelector('.form_done_icon');
    if (action === 'wrong' && wrong_icon.classList.contains('hidden')) {
      wrong_icon.classList.remove('hidden');
      if (!done_icon.classList.contains('hidden')) {
        done_icon.classList.add('hidden');
      }
    } else if (action !== 'wrong' && done_icon.classList.contains('hidden')) {
      done_icon.classList.remove('hidden');
      if (!wrong_icon.classList.contains('hidden')) {
        wrong_icon.classList.add('hidden');
      }
    }
  };
  const removeFormIcon = () => {
    let wrong_icon = document.querySelector('.form_wrong_icon');
    let done_icon = document.querySelector('.form_done_icon');
    if (!wrong_icon.classList.contains('hidden')) {
      wrong_icon.classList.add('hidden');
    } else if (!done_icon.classList.contains('hidden')) {
      done_icon.classList.add('hidden');
    }
  };
  const cleanElement = (current_el, tipName, iconName = '') => {
    current_el.classList.remove('wrong');
    current_el.classList.remove('done');
    let wrong_tip = document.querySelector(tipName);
    wrong_tip.classList.add('hidden');
    if (iconName === 'name') {
      removeFormIcon();
    }
  };
  function focusInputHandler(e) {
    if (e.target.id === 'name') {
      key = setInterval(() => {
        validateName(e.target)
      }, 700);
    }
  }
  function blurInputHandler(e) {
    if (e.target.id === 'name') {
      clearInterval(key);
    }
  }
};