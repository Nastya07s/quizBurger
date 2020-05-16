document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBlock = document.querySelector('#modalBlock');
  // const modalWrap = document.querySelector('.modal');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const burgerBtn = document.getElementById('burger');

  let { clientWidth } = document.documentElement;
  burgerBtn.style.display = clientWidth < 768 ? 'flex' : 'none';

  window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;

    burgerBtn.style.display = clientWidth < 768 ? 'flex' : 'none';
  });

  const playTest = () => {
    const renderQuestions = () => {
      const burgerImage = './assets/img/burger.png';
      const burgerTitle = 'Стандарт';

      questionTitle.textContent = 'Какого цвета бургер вы хотите?';
      formAnswers.innerHTML = `
        <div class="answers-item d-flex flex-column">
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${burgerImage}" alt="burger">
            <span>${burgerTitle}</span>
          </label>
        </div>
      `;
    };

    renderQuestions();
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('active');
    modalBlock.classList.add('d-block');

    playTest();
  });

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');

    playTest();
  });

  document.body.addEventListener('click', ({ target }) => {
    if (!target.closest('.modal-dialog')
    && !target.closest('.openModalButton')
    && !target.closest('.burger')) {
      modalBlock.classList.remove('d-block');
      burgerBtn.classList.remove('active');
    }
  });

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
    burgerBtn.classList.remove('active');
  });
});
