document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBlock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');

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

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');

    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
  });
});
