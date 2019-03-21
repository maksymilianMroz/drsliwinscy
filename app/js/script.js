function scrollTo(element, e) {
    e.preventDefault();
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.getBoundingClientRect().top - 50 + window.scrollY
    });
  }
  
  
  const btn = document.querySelector('a.btn');
  const start = document.querySelector('a.start');
  const oNas = document.querySelector('a.oNas');
  const kontakt = document.querySelector('a.kontakt');

  const sekcjaONas = document.querySelector('.about-us');
  const sekcjaStart = document.querySelector('.section-start');
  const sekcjaKontakt = document.querySelector('.contact-section');
  
  btn.addEventListener('click', (e) => scrollTo(sekcjaONas, e));
  oNas.addEventListener('click', (e) => scrollTo(sekcjaONas, e));
  

  start.addEventListener('click', (e) => scrollTo(sekcjaStart, e));
  kontakt.addEventListener('click', (e) => scrollTo(sekcjaKontakt, e));
  









function zmienActiveStart() {
    start.classList.add('main-nav__active');
    oNas.classList.remove('main-nav__active');
    kontakt.classList.remove('main-nav__active');
}
start.addEventListener('click', zmienActiveStart);

function zmienActiveoNas() {
    start.classList.remove('main-nav__active');
    oNas.classList.add('main-nav__active');
    kontakt.classList.remove('main-nav__active');
}
oNas.addEventListener('click', zmienActiveoNas);

function zmienActiveKontakt() {
    start.classList.remove('main-nav__active');
    oNas.classList.remove('main-nav__active');
    kontakt.classList.add('main-nav__active');
}
kontakt.addEventListener('click', zmienActiveKontakt);


// PONIŻEJ ELEMENT KODU DO DOPRACOWANIA

// const start = document.querySelector('a.start');
// const oNas = document.querySelector('a.oNas');
// const kontakt = document.querySelector('a.kontakt');

// window.onscroll = function () { 
//     if (document.body.scrollTop =< 100 ) {
//         start.classList.add("main-nav__active");
//         start.classList.remove("main-nav__active");
//     } 
//     else {
//         oNas.classList.add("main-nav__active");
//         oNas.classList.remove("main-nav__active");
//     }
// };













// KOD Z SEKCJI O NAS

let herWykBtn = document.querySelector('.her-wyksztalcenie__btn');
let herDiaBtn = document.querySelector('.her-diagnostyka__btn');

let herWykSec = document.querySelector('.her-wyksztalcenie');
let herDiaSec = document.querySelector('.her-diagnostyka');



function wykBtnHer() {
    herWykSec.classList.add('active-text');
    herDiaSec.classList.add('notactive-text');
    herWykSec.classList.remove('notactive-text');
    herDiaSec.classList.remove('active-text');

    herWykBtn.classList.add('active--btn');
    herWykBtn.classList.remove('notactive--btn');
    herDiaBtn.classList.remove('active--btn');
    herDiaBtn.classList.add('notactive--btn');
};
herWykBtn.addEventListener('click', wykBtnHer);

function diaBtnHer() {
    herDiaSec.classList.add('active-text');
    herWykSec.classList.add('notactive-text');
    herDiaSec.classList.remove('notactive-text');
    herWykSec.classList.remove('active-text');

    herWykBtn.classList.remove('active--btn');
    herWykBtn.classList.add('notactive--btn');
    herDiaBtn.classList.add('active--btn');
    herDiaBtn.classList.remove('notactive--btn');
};
herDiaBtn.addEventListener('click', diaBtnHer);

let hisWykBtn = document.querySelector('.his-wyksztalcenie__btn');
let hisDiaBtn = document.querySelector('.his-diagnostyka__btn');

let hisWykSec = document.querySelector('.his-wyksztalcenie');
let hisDiaSec = document.querySelector('.his-diagnostyka');


function wykBtnHis() {
    hisWykSec.classList.add('active-text');
    hisDiaSec.classList.add('notactive-text');
    hisWykSec.classList.remove('notactive-text');
    hisDiaSec.classList.remove('active-text');

    hisWykBtn.classList.add('active--btn');
    hisWykBtn.classList.remove('notactive--btn');
    hisDiaBtn.classList.remove('active--btn');
    hisDiaBtn.classList.add('notactive--btn');
};
hisWykBtn.addEventListener('click', wykBtnHis);

function diaBtnHis() {
    hisDiaSec.classList.add('active-text');
    hisWykSec.classList.add('notactive-text');
    hisDiaSec.classList.remove('notactive-text');
    hisWykSec.classList.remove('active-text');

    hisWykBtn.classList.remove('active--btn');
    hisWykBtn.classList.add('notactive--btn');
    hisDiaBtn.classList.add('active--btn');
    hisDiaBtn.classList.remove('notactive--btn');
};
hisDiaBtn.addEventListener('click', diaBtnHis);