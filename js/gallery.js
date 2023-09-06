const photosList = document.getElementById('gallery-slider__list')

let photosAmount = 17
let sliderPerPage = 4
// Генерируем все картинки
for (let i = 1; i <= photosAmount; i++) {
	let element = document.createElement('li')

	element.classList.add('splide__slide');
	element.classList.add('gallery__item');

	imgPath = './img/404V.svg'
	
	let template = `<img src="./img/gallery/${i}.webp" alt="${i}" onError="this.src='${imgPath}'">`
	
	element.innerHTML = template
	photosList.appendChild(element)
}

// Инициализация слайдера для галереи
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#gallery-slider', {
		perPage: sliderPerPage,
		perMove: 1,
		type : 'loop',
		gap: '10px',
		breakpoints: {
			991.98: {
				perPage: 3,
				gap: '10px',
			},
			767.98: {
				perPage: 2,
			},
			479.98: {
				perPage: 1,
			}
		},
	}).mount();
});