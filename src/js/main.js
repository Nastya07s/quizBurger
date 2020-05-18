document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.getElementById('btnOpenModal');
  const modalBlock = document.getElementById('modalBlock');
  const closeModal = document.getElementById('closeModal');
  const questionTitle = document.getElementById('question');
  const formAnswers = document.getElementById('formAnswers');
  const burgerBtn = document.getElementById('burger');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const sendBtn = document.getElementById('send');

  const modalDialog = document.querySelector('.modal-dialog');
  const modalTitle = document.querySelector('.modal-title');

  const questions = [
    {
      question: 'Какого цвета бургер?',
      answers: [
        {
          title: 'Стандарт',
          url: './assets/img/burger.png',
        },
        {
          title: 'Черный',
          url: './assets/img/burgerBlack.png',
        },
      ],
      type: 'radio',
    },
    {
      question: 'Из какого мяса котлета?',
      answers: [
        {
          title: 'Курица',
          url: './assets/img/chickenMeat.png',
        },
        {
          title: 'Говядина',
          url: './assets/img/beefMeat.png',
        },
        {
          title: 'Свинина',
          url: './assets/img/porkMeat.png',
        },
      ],
      type: 'radio',
    },
    {
      question: 'Дополнительные ингредиенты?',
      answers: [
        {
          title: 'Помидор',
          url: './assets/img/tomato.png',
        },
        {
          title: 'Огурец',
          url: './assets/img/cucumber.png',
        },
        {
          title: 'Салат',
          url: './assets/img/salad.png',
        },
        {
          title: 'Лук',
          url: './assets/img/onion.png',
        },
      ],
      type: 'checkbox',
    },
    {
      question: 'Добавить соус?',
      answers: [
        {
          title: 'Чесночный',
          url: './assets/img/sauce1.png',
        },
        {
          title: 'Томатный',
          url: './assets/img/sauce2.png',
        },
        {
          title: 'Горчичный',
          url: './assets/img/sauce3.png',
        },
      ],
      type: 'radio',
    },
  ];

  let { clientWidth } = document.documentElement;
  burgerBtn.style.display = clientWidth < 768 ? 'flex' : 'none';

  window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;

    burgerBtn.style.display = clientWidth < 768 ? 'flex' : 'none';
  });

  let count = -100;

  const animateModal = () => {
    modalDialog.style.top = `${count}%`;
    count += 3;

    if (count < 0) requestAnimationFrame(animateModal);
    else count = -100;
  };

  const playTest = () => {
    let numberQuestion = 0;
    const finalAnswers = [];
    const obj = {};

    modalTitle.textContent = 'Ответь на вопросы:';

    const renderAnswers = (index) => {
      questions[index].answers.forEach(({ title, url }) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center');
        answerItem.innerHTML = `
          <input type="${questions[index].type}" id="${title}" name="answer" class="d-none" value="${title}">
          <label for="${title}" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${url}" alt="burger">
            <span>${title}</span>
          </label>
        `;
        formAnswers.appendChild(answerItem);
      });
    };

    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = '';
      let numberPhone;

      switch (true) {
        case (numberQuestion === 0):
          questionTitle.textContent = `${questions[indexQuestion].question}`;

          nextBtn.classList.remove('d-none');
          prevBtn.classList.add('d-none');
          sendBtn.classList.add('d-none');

          renderAnswers(indexQuestion);
          break;
        case (numberQuestion === questions.length):
          questionTitle.textContent = 'Введите ваш номер телефона';
          modalTitle.textContent = '';

          nextBtn.classList.add('d-none');
          prevBtn.classList.add('d-none');
          sendBtn.classList.remove('d-none');

          formAnswers.innerHTML = `
          <div class-="form-group">
            <label for="numderPhone"></label>
            <input type="phone" class="form-control" id="numberPhone" placeholder="Your number" autocomplete="off" pattern="[0-9+-]">
          </div>
          `;

          numberPhone = document.getElementById('numberPhone');

          numberPhone.addEventListener('input', ({ target }) => {
            numberPhone.value = target.value.replace(/[^0-9+-]/, '');
          });
          break;
        case (numberQuestion > questions.length):
          questionTitle.textContent = 'Спасибо за пройденный тест';
          sendBtn.classList.add('d-none');

          Object.keys(obj).forEach((key) => {
            const newObj = {};
            newObj[key] = obj[key];
            finalAnswers.push(newObj);
          });

          console.log(finalAnswers);

          setTimeout(() => {
            modalBlock.classList.remove('d-block');
          }, 3000);
          break;
        default:
          questionTitle.textContent = `${questions[indexQuestion].question}`;

          nextBtn.classList.remove('d-none');
          prevBtn.classList.remove('d-none');
          sendBtn.classList.add('d-none');

          renderAnswers(indexQuestion);
          break;
      }
    };

    renderQuestions(numberQuestion);

    const checkAnswer = () => {
      const inpunts = [...formAnswers.elements].filter((el) => el.checked || el.id === 'numberPhone');

      inpunts.forEach((input, i) => {
        if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
          obj[`${i}_${questions[numberQuestion].question}`] = input.value;
        }

        if (numberQuestion === questions.length) {
          obj['Номер телефона'] = input.value;
        }
      });

      // finalAnswers.push(obj);
    };

    nextBtn.onclick = () => {
      checkAnswer();
      numberQuestion += 1;
      renderQuestions(numberQuestion);
    };

    prevBtn.onclick = () => {
      numberQuestion -= 1;
      renderQuestions(numberQuestion);
    };

    sendBtn.onclick = () => {
      checkAnswer();
      numberQuestion += 1;
      renderQuestions(numberQuestion);
    };
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('active');
    modalBlock.classList.add('d-block');

    playTest();
  });

  btnOpenModal.addEventListener('click', () => {
    requestAnimationFrame(animateModal);

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
