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
  