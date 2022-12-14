/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle')
navClose = document.querySelector('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if element is present */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabsContents.forEach(tabsContents => {
            tabsContents.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalButtons = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i)
    });
});

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal');
        })
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortolio = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.querySelector('#header');

    if (this.scrollY >= 80)
        nav.classList.add('scroll-header');
    else
        nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');

    if (this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Storage of selected configuration
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});