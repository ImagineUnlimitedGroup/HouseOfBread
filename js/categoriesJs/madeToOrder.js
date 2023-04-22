const cakesList = document.querySelector('.category-menu__list')

let cakesArr = [
	{
		title: `JINGALOV BREAD`,
		note: `15m`,
		price: `10.99`,
		img: ``,
		description: `Thin grilled flatbread stuffed with 22+ greens and herbs. Available Sundays only! PLACING ORDERS AHEAD STRONGLY RECOMMENDED.`
	},
]

let id = 0
// Генерируем все карточки
cakesArr.forEach(cake => {
	
	let element = document.createElement('li')

	element.classList.add('category-menu__li');
	element.classList.add('category-item');

	id += 1
	element.id = id;

	let imgPath = '../img/menu/cakes/cakes.svg'

	if (cake.img.length != 0) {
		console.log(cake.img)
		imgPath = cake.img
	}

	let template = `
<div class="img-container">
	<img src="${imgPath}" alt="" class="category-item__img item__img ">
</div>
<div class="category-item__body">
	<h3 class="category-item__title title">${cake.title}</h3>
	<h3 class="category-item__price title">$${cake.price}</h3>
</div>
<p class="category-item__text text">
	${cake.description}
</p>
	`
	
	element.innerHTML = template
	cakesList.appendChild(element)
});