
// scroll reveal
ScrollReveal({
  distance:"700px",
  duration:2000,
  delay:200,
  reset: true,
});
ScrollReveal().reveal('.cta_box, .view-right', { origin: 'right'});
ScrollReveal().reveal('.contact, .about_img', { origin: 'left'});
ScrollReveal({
  distance:"200px",
  duration:2000,
  delay:200,
  reset: false,
}).reveal('.box,.view-box,.view-left', { origin: 'bottom', interval:150});
ScrollReveal({
  distance:"200px",
  duration:2000,
  delay:200,
  reset: false,
}).reveal(' .about p', { origin: 'right'});




//Splitting
Splitting();

gsap.registerPlugin(ScrollTrigger);


//////////////////////////  HERO SECTION  //////////////////////////////////////////////////


// Hero Title Animation
const httl = gsap.timeline();
httl.from(".title .char", 1, {
  opacity: 0,
  yPercent: 130,
  stagger: 0.06,
  ease: "back.out"
});



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



////////////////////////////////////////////////////////////////////////////



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
  y:1400,
  x:-800,
  opacity: 0
})





//menu 
//GSAP

document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({ paused: true });

  tl.to(".menu-overlay", {
    duration: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power2.out",
  });

  tl.from(
    ".menu-link, .btn",
    {
      opacity: 0,
      y: 60,
      stagger: 0.05,
      duration: 0.75,
      ease: "power1.inOut",
    },
    "<",
  );

  tl.to(
    ".menu-logo",
    {
      duration: 1,
      height: "200px",
      ease: "power2.out",
    },
    "<",
  );

  

  function openMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "all";
    tl.play();
  }

  function closeMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "none";
    tl.reverse();
  }

  document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
  document
    .querySelector(".menu-close-btn")
    .addEventListener("click", closeMenu);
    document.querySelectorAll('.link_click').forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  tl.reverse();
});



















