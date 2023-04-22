const categoriesList = document.querySelector('.categories-menu__list')

// Массив с данными всех категорий меню
let categoriesArr = [
	{title: 'MADE TO ORDER', imgPath: './img/Categories/Steak.svg', link: './categoriesHtml/made-to-order.html'},
	{title: 'SALADS', imgPath: './img/Categories/Salad.svg', link: './categoriesHtml/salads.html'},
	{title: 'PASTRIES', imgPath: './img/Categories/Pastries.svg', link: './categoriesHtml/pastries.html'},
	{title: 'CAKES', imgPath: './img/Categories/Cakes.svg', link: './categoriesHtml/cakes.html'},
	{title: 'BEVERAGES', imgPath: './img/Categories/Beverages.svg', link: './categoriesHtml/beverages.html'}
]

// Генерируем все карточки
categoriesArr.forEach(category => {
	let element = document.createElement('li')

	element.classList.add('categories-menu__li');
	element.classList.add('categories-item');

	let template = `
<a href="${category.link}">
	<img src="${category.imgPath}" alt="" class="item__img">
	<h3 class="category-item__title title">${category.title}</h3>
</a>
	`
	
	element.innerHTML = template
	categoriesList.appendChild(element)
});