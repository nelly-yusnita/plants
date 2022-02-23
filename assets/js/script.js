// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button'),
		navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu');
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
	menuButton.classList.remove('close-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME SLIDES ===== //
const homeSwiper = new Swiper(".home__container", {
	spaceBetween: 30,
	loop: 'true',

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});
// ====== end home slides ===== //

// ===== COUNTDOWN TIMER ===== //
const countdownDate = new Date("December 25, 2022 08:30:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
	}
}, 1000);
// ===== end countdown timer ===== //

// ===== BLOG CAROUSEL ===== //
const blogSwiper = new Swiper('.blog__container', {
	spaceBetween: 24,
	// loop: true,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// ===== end blog carousel ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
// ===== end dark light theme ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__images, .home__data, .home__social

// 2. fitur -> .fitur__box
const fiturBox = document.querySelectorAll('.fitur__box');
fiturBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 3. about -> .about__img, .about__data

// 4. class css -> .section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 5. products -> .product__card, .
const productCard = document.querySelectorAll('.product__card');
productCard.forEach((n, i) => {
	n.dataset.aos = 'zoom-in-down';
	n.dataset.aosDelay = i * 100;
});

// 6. banner -> .banner__container

// 7. blog -> .blog__container

// 9. gallery -> .gallery__container

// 10. contact -> .contact__data, .contact__form

// 11. footer -> .footer__content
const footerContent = document.querySelectorAll('.footer__content');
footerContent.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //