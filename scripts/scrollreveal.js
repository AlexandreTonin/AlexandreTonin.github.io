// Header
const navbar = {
    delay: 100,
    origin: 'top',
    distance: '50%',
    duration: '1000',
    opacity: '0',
}
// <------>

// Hero
const sub1 = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    duration: '1500',
    reset: true,
};

const myName = {
    distance: '50%',
    origin: 'right',
    opacity: 0,
    duration: '1500',
    reset: true,
};

const sub2 = {
    opacity: 0,
    duration: '5000',
    reset: true,
};

// <------>

// section title
const sectionTitle = {
    delay: 50,
    origin: 'bottom',
    distance: '100%',
    duration: '1500',
    opacity: '0',
    reset: true,
};
// <------>

// directions
const fromBottom = {
    delay: 50,
    origin: 'bottom',
    distance: '50%',
    duration: '1500',
    opacity: '0',
    reset: true,
}

const fromLeft = {
    delay: 500,
    origin: 'left',
    distance: '100%',
    duration: '1000',
    opacity: '0',
    reset: true,
    interval: 300,
}
// <------>

// project section
const viewProject = {
    delay: 500,
    origin: 'right',
    distance: '30%',
    duration: '1000',
    opacity: '0',
    reset: true,
}
// <------>

// education section
const formation = {
    delay: 500,
    origin: 'bottom',
    distance: '100%',
    duration: '1000',
    opacity: '0',
    reset: true,
    interval: 300,
}
// <------>


// skills section
const wrapper = {
    delay: 100,
    origin: 'bottom',
    distance: '50%',
    duration: '1000',
    opacity: '0',
    interval: 200,
}
// <------>

// Navbar reveal
ScrollReveal().reveal('#navbar', navbar);

// Hero section reveal
ScrollReveal().reveal('.sub1', sub1);
ScrollReveal().reveal('.sub2', sub2);
ScrollReveal().reveal('.name', myName);

// Section title
ScrollReveal().reveal('.section-title', sectionTitle);

// About section reveal
ScrollReveal().reveal('.pic', fromBottom);
ScrollReveal().reveal('.about-description', fromBottom);
ScrollReveal().reveal('.icon', fromLeft);
ScrollReveal().reveal('.formation', formation);

// Projects section reveal
ScrollReveal().reveal('.project', fromBottom);
ScrollReveal().reveal('.button', fromBottom);
ScrollReveal().reveal('.view-project', viewProject);

// Skills section reveal

ScrollReveal().reveal('.skills-icons', fromBottom);
ScrollReveal().reveal('.wrapper', wrapper);








