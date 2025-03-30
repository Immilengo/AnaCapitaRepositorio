// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animation]');
    const windowHeight = window.innerHeight * 0.8;
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < windowHeight) {
        element.classList.add('animate');
      }
    });
  };
  
  // Menu Mobile
  const menuMobile = document.querySelector('.menu-mobile');
  const navLinks = document.querySelector('.nav-links');
  
  menuMobile.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuMobile.classList.toggle('active');
  });
  
  // Inicialização
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  // Typing Effect
const typed = document.querySelector('.typed');
const words = ['Especialista em Tranças', 'Especialista em poxinhos'];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

const type = () => {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substr(0, j++);
      typed.textContent = currentWord;
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substr(0, j--);
      typed.textContent = currentWord;
    } else {
      isDeleting = !isDeleting;
      i = !isDeleting ? (i + 1) % words.length : i;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
};
type();

  