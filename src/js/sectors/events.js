const initCustomEvents = () => {
  initFormButtons();
};

const initFormButtons = () => {
  let formBtns = document.querySelectorAll(".btn_options");
  let commentSector = document.querySelector('.main_comments');
  let main_heading = document.querySelector('.header_block h1');
  let selection_heading = document.querySelectorAll('.header_block h2')[0];
  let form_heading = document.querySelector('.header_block h3');
  let form_tip = document.querySelectorAll('.header_block h2')[1];
  let tip = document.getElementsByClassName('main_tips')[0];
  let main_btns = document.querySelectorAll('.main_btn');
  let selection_btns = document.querySelectorAll('.selection_btn');
  let headerBlock = document.getElementsByTagName('header')[0];
  let form = document.querySelector('.main_form');
  let main_block = document.getElementsByTagName('main')[0];
  let dateArrow = document.querySelectorAll('.form_date span');

  dateArrow.forEach((item) => {
    item.addEventListener('click', () => {},true)
  });

  formBtns.forEach((item) => {
    item.addEventListener("click", clickButtonsHandler)
  });

  function clickButtonsHandler(event) {
    let isMainPage = event.target.classList.contains('main_btn');
    if (isMainPage) {
      showSelectionMenu();
    } else {
      showForm();
    }
  }

  const showSelectionMenu = () => {
    main_block.classList.add('main_block');
    main_heading.classList.add('hidden');
    headerBlock.classList.add('header_block');
    commentSector.classList.add('hidden');
    selection_heading.classList.remove('hidden');
    tip.classList.remove('hidden');

    showBlock(selection_btns);
    hideBlock(main_btns);
  };

  const showForm = () => {

    selection_heading.classList.add('hidden');
    form_heading.classList.remove('hidden');
    form_tip.classList.remove('hidden');
    form.classList.remove('hidden');
    tip.classList.add('hidden');
    hideBlock(selection_btns);
    addOptionYear();
    initValidationForm();
  };

  const showBlock = (arrData) => {
    arrData.forEach((item) => {
      item.classList.remove('hide');
      item.classList.remove('hidden');
    });
  };

  const hideBlock = (arrData) => {
    arrData.forEach((item) => {
      item.classList.add('hide');
      setTimeout(() => {item.classList.add('hidden')},200);
    });
  };

  const addOptionYear = () => {

    let select_year = document.querySelector('#year');
    let start_year = 1950;

    while (start_year <= +new Date().getFullYear()){

      let option = document.createElement('option');
      option.value = start_year;
      option.label = start_year;

      select_year.appendChild(option);
      start_year++;
    }
  }
};