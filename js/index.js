// Инициализация слайдера для галереи
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#gallery-slider', {
		perPage: 4,
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

// Инициализация слайдера для отзывов
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#slider2', {
		perPage: 3,
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
			479.98: {
				perPage: 1,
			}
		},
	}).mount();
});