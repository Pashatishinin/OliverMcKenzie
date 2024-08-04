// scroll reveal
ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
    reset: true,
});

ScrollReveal().reveal('.about_img,.contact', { origin: 'left'});
ScrollReveal().reveal('.about_textm,.skills,.view-right', { origin: 'right'});
ScrollReveal().reveal('h2, h1', { origin: 'top'});
ScrollReveal().reveal('.box,.cta-box,.view-box ', { origin: 'bottom'});
ScrollReveal().reveal('h3', { origin: 'bottom', interval:900});

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
  

 