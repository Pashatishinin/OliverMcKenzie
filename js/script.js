document.addEventListener("DOMContentLoaded", function () {

  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
  });

  timeline.to(".menu-item p", {
    duration: 1.5,
    y: 0,
    stagger: 0.2,
    ease: "power4.out",
  }, "-=1");


  function toggleMenu() {
    if (isOpen) {
      timeline.reverse();
      toggleButton.classList.remove('active'); // Удаляем класс активности
    } else {
      timeline.play();
      toggleButton.classList.add('active'); // Добавляем класс активности
    }
    isOpen = !isOpen; // Переключаем состояние
  }

  // Обработчик клика на кнопку-бургер
  toggleButton.addEventListener("click", toggleMenu);

  // Обработчик клика на ссылки внутри меню
  document.querySelectorAll('.menu-item-name a, .left_header').forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное действие ссылки
      toggleMenu(); // Переключаем состояние меню
    });
  });
});



// scroll reveal
ScrollReveal({
  distance:"700px",
  duration:2000,
  delay:200,
  reset: true,
});
ScrollReveal().reveal('.cta_box, .view-right p, .video', { origin: 'right'});
ScrollReveal().reveal('.logo-box, .contact h3', { origin: 'top'});
ScrollReveal().reveal('.about_img', { origin: 'left'});
ScrollReveal({
  distance:"200px",
  duration:2000,
  delay:200,
  reset: true,
}).reveal('.view-left, .contact .contacts div', { origin: 'bottom', interval:300});
ScrollReveal({
  distance:"200px",
  duration:2000,
  delay:200,
  reset: false,
}).reveal(' .about p', { origin: 'right'});


ScrollReveal({
  distance:"90px",
    duration:2000,
    delay:200,
    reset: false,
}).reveal('.wall-item', { origin: 'bottom'});




//Splitting
Splitting();

gsap.registerPlugin(ScrollTrigger);


//////////////////////////  HERO SECTION  //////////////////////////////////////////////////


// Hero Title Animation

const HeroTitle = document.querySelector('.title .char');
if (HeroTitle) {
  const httl = gsap.timeline();
  httl.from(".title .char", 1, {
    opacity: 0,
    yPercent: 130,
    stagger: 0.06,
  ease: "back.out"
});
}




//////////////////////////  MIDLE SECTION  //////////////////////////////////////////////////


// MIddle Text Animation
const gsapItem = gsap.utils.toArray('.middle_text_box');
gsapItem.forEach((gsIt) => {

  const textChar = gsIt.querySelectorAll('.char');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: gsIt,
      start: "top 80%",
      end: "300% 80%",
      toggleActions: "play none none none",
      scrub: 1,
      markers: false
    }
  });
  tl.from(textChar, 1, {
    opacity: 0,
    yPercent: 130,
    stagger: 0.06,
    ease: "back.out"
  });
});



////////////////////////////// PROJECT SECTION //////////////////////////////////////////////



const SemiTitle = document.querySelector('.title .char');
if (SemiTitle) {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.semi_title',
      start: '-50px 0',
      end: '1400px 0',
      scrub: true,
      markers: false,
    }
  })
  tl2.to('.semi_title', {
    y:1600,
    x:-500,
    opacity: 0
  })
}


const Wall = document.querySelector('.wall');
if (Wall) {
  document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.wall-item', {
        distance: '90px',
        duration: 2000,
        delay: 200,
        origin: 'bottom',
        reset: false
    });
  
  });
  
  $('.wall').jaliswall({
        item: '.wall-item',
        columnClass: '.wall-column'
  });
}









