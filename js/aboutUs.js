const photosList = document.getElementById('aboutUS-slider__list')

let photosAmount = 3
let sliderPerPage = 3

// Генерируем все картинки
for (let i = 1; i <= photosAmount; i++) {
	let element = document.createElement('li')

	element.classList.add('splide__slide');
	element.classList.add('aboutUS__item');

	imgPath = './img/icons/logo.png'
	
	let template = `<img src="./img/aboutUs/${i}.webp" alt="${i}" onError="this.src='./img/404V.svg'">`
	
	element.innerHTML = template
	photosList.appendChild(element)
}

// Инициализация слайдера для галереи
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#aboutUS-slider', {
		perPage: sliderPerPage,
		perMove: 1,
		type : 'loop',
		gap: '10px',
		breakpoints: {
			991.98: {
				perPage: 2,
				gap: '10px',
			},
			767.98: {
				perPage: 2,
			},
			650: {
				perPage: 1,
			}
		},
	}).mount();
});