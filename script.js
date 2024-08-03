// scroll reveal
ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
    reset: false,
});

ScrollReveal().reveal('.about_img', { origin: 'left'});
ScrollReveal().reveal('.about_text', { origin: 'right'});
ScrollReveal().reveal('h2, h1', { origin: 'top'});
ScrollReveal().reveal('.box,.cta-box', { origin: 'bottom'});
ScrollReveal().reveal('h3', { origin: 'bottom', interval:900});

