const categoriesList = document.querySelector('.categories-menu__list')

// Массив с данными всех категорий меню
let categoriesArr = [
	{title: 'MADE TO ORDER', imgPath: './img/menu/madeToOrder/steak.svg', link: './categoriesHtml/madeToOrder.html'},
	{title: 'SALADS', imgPath: './img/menu/salads/salad.svg', link: './categoriesHtml/salads.html'},
	{title: 'PASTRIES', imgPath: './img/menu/pastries/pastries.svg', link: './categoriesHtml/pastries.html'},
	{title: 'CAKES', imgPath: './img/menu/cakes/cakes.svg', link: './categoriesHtml/cakes.html'},
	{title: 'BEVERAGES', imgPath: './img/menu/beverages/beverages.svg', link: './categoriesHtml/beverages.html'}
]

// Генерируем все карточки
categoriesArr.forEach(category => {
	let element = document.createElement('li')

	element.classList.add('categories-menu__li');
	element.classList.add('categories-item');

	imgPath = './img/main.svg'

	let template = `
<a href="${category.link}">
	<img src="${category.imgPath}" alt="" onError="this.src='${imgPath}'" class="item__img">
	<h3 class="categories-item__title title">${category.title}</h3>
</a>
	`
	
	element.innerHTML = template
	categoriesList.appendChild(element)
});