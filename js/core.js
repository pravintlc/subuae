const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 300
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 300,

        }

    },


    // Navigation arrows
    navigation: {
        nextEl: '.testimonial__button_next',
        prevEl: '.testimonial__button_prev',
    },


});
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters

    loop: true,

    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        1399: {
            slidesPerView: 4,
            spaceBetween: 20,
        }


    },



});


// Sticky navbar start
// Function to check scroll position and add sticky class if necessary
function checkScrollPosition() {
    if (window.scrollY > 50) {
        document.querySelector('.nav_container').classList.add('sticky');
    } else {
        document.querySelector('.nav_container').classList.remove('sticky');
    }
}

// Add event listener for scroll
document.addEventListener('scroll', checkScrollPosition);

// Check scroll position on page load
document.addEventListener('DOMContentLoaded', checkScrollPosition);

// navbar toggler code
function toggleNavbar() {
    const navbarToggler = document.querySelector('.primary_navbar__toggler');
    const navbarBg = document.querySelector('.nav_container');
    const mobileMenu = document.querySelector('.mobile_nav');
    navbarToggler.classList.toggle('open');
    navbarBg.classList.toggle('open');
    mobileMenu.classList.toggle('open');
}
const navbarMenu = document.querySelector('.primary_navbar__toggler');
navbarMenu.addEventListener('click', toggleNavbar);