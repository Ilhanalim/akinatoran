const questionData = [
  'Apakah dia anak atas?',
  'Apakah dia merokok?',
  'Apakah dia kumisan?',
  'Apakah dia bermain grock?',
  'Apakah dia hanya bisa bermain cyclops?',
  'Apakah dia ShopeeFood?',
  'Apakah dia cina?',
];

const database = [
  {
    nama: 'rafa',
    link: 'rafa.html',
    atas: true,
    rokok: true,
    kumis: true,
    grock: false,
    cyc: false,
    shopee: false,
    cina: false,
  },
  {
    nama: 'kimbaw',
    link: 'kimbaw.html',
    atas: true,
    rokok: true,
    kumis: false,
    grock: false,
    cyc: false,
    shopee: false,
    cina: false,
  },
  {
    nama: 'eki',
    link: 'eki.html',
    atas: false,
    rokok: true,
    kumis: false,
    grock: false,
    cyc: false,
    shopee: false,
    cina: false,
  },
  {
    nama: 'ocol',
    link: 'ocol.html',
    atas: false,
    rokok: true,
    kumis: false,
    grock: true,
    cyc: false,
    shopee: false,
    cina: false,
  },
  {
    nama: 'biyu',
    link: 'biyu.html',
    atas: true,
    rokok: true,
    kumis: true,
    grock: false,
    cyc: true,
    shopee: false,
    cina: false,
  },
  {
    nama: 'alip',
    link: 'alip.html',
    atas: true,
    rokok: false,
    kumis: true,
    grock: false,
    cyc: false,
    shopee: true,
    cina: false,
  },
  {
    nama: 'epri',
    link: 'epri.html',
    atas: false,
    rokok: true,
    kumis: false,
    grock: false,
    cyc: false,
    shopee: false,
    cina: true,
  },
];

const property = ['atas', 'rokok', 'kumis', 'grock', 'cyc', 'shopee', 'cina'];

const question = document.querySelector('.question');
const btnAll = document.querySelectorAll('.btn');
const btnYes = document.querySelector('.btnYes');
const btnNo = document.querySelector('.btnNo');
const number = document.querySelector('.number');
const noQuestion = document.querySelector('.number-count');
const subTitle = document.querySelector('.sub-title');
const buttonParent = document.querySelector('.button-parent');

let currentQuestionData = 0;
let currentProperty = 0;
let noQues = 1;
let ans = true;
let yes = btnYes.getAttribute('data-val');
let no = btnNo.getAttribute('data-val');

loadQuestion();

function loadQuestion() {
  let currentQuestion = questionData[currentQuestionData];
  noQuestion.innerText = noQues;
  question.innerText = currentQuestion;
}

btnYes.addEventListener('click', () => {
  getAnswer(yes, property[currentProperty]);
  currentQuestionData++;
  currentProperty++;
  noQues++;
  if (database.length !== 1 && database.length !== 0) loadQuestion();
});

btnNo.addEventListener('click', () => {
  getAnswer(no, property[currentProperty]);
  currentQuestionData++;
  currentProperty++;
  noQues++;
  if (database.length !== 1 && database.length !== 0) loadQuestion();
});

function getAnswer(answer, property) {
  if (answer === 'y') {
    ans = true;
  } else {
    ans = false;
  }

  let toRemove = [];
  database.forEach((d) => {
    if (d[property] !== ans) {
      toRemove.push(d);
    }
  });

  toRemove.forEach((e) => {
    const index = database.indexOf(e);
    if (index > -1) {
      database.splice(index, 1);
      console.log(database);
    }
  });

  if (database.length === 1) {
    window.location.href = `pages/${database[0].link}`;
  } else if (database.length === 0) {
    question.innerText = 'Maap yak belom ketemu masih banyak bug nich';
    subTitle.classList.add('d-none');
    number.classList.add('d-none');
    btnAll.forEach((e) => {
      e.classList.add('d-none');
    });

    let mainLagi = document.createElement('a');
    mainLagi.innerText = 'Main Lagi';
    mainLagi.classList.add('btnLink');
    mainLagi.setAttribute('href', 'index.html');
    buttonParent.appendChild(mainLagi);
  }
}
