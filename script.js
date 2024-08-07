



// scroll reveal
ScrollReveal({
  distance:"700px",
  duration:2000,
  delay:200,
  reset: true,
});
ScrollReveal().reveal('.cta_box, .view-right', { origin: 'right'});
ScrollReveal({
  distance:"200px",
  duration:2000,
  delay:200,
  reset: false,
}).reveal('.box,.view-box,.view-left', { origin: 'bottom', interval:150});


Splitting();

gsap.registerPlugin(ScrollTrigger);

const gtl = gsap.timeline();
gtl.from(".title .char", 1, {
  opacity: 0,
  yPercent: 130,
  stagger: 0.06,
  ease: "back.out"
});

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

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.semi_title2',
    start: '-50px 20%',
    end: '1600px 0',
    scrub: true,
    markers: false,
  }
})

tl3.to('.semi_title2', {
  y:300,
  scale: 2,
  opacity: 0
})


let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about_img',
    start: 'top center',
    end: 'bottom 60%',
    scrub: true,
    markers: false,
  }
})

tl4.from('.about_img', {
  x:-300,
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



// const myText = new SplitType('#my-text')

// gsap.to(".char", {
//   y: 0,
//   stagger: 0.05,
//   delay: 0.2,
//   duration: .1
// })

// // gsap
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.semi_title',
//     start: '-50px 0',
//     end: '1400px 0',
//     scrub: true,
//     markers: false,
//   }
// })

// tl.to('.semi_title', {
//   y:1400,
//   x:-800,
//   opacity: 0
// })

// // split and animate text

// gsap.registerPlugin(ScrollTrigger)

// const splitTypes = document.querySelectorAll('.reveal-text')

// splitTypes.forEach((char,i) => {

//   const newText = new SplitType(char, { types: 'chars'})

//   gsap.from(newText.chars, {
//     scrollTrigger: {
//       trigger: char,
//       start: 'top 80%',
//       end: 'top 20%',
//       scrub: true,
//       markers: true
//     },
//   })

//   gsap.to(newText.chars, {
//     y: 0,
//     stagger: 0.05,
//     delay: 0.2,
//     duration: .1
//   })


  
// })

















