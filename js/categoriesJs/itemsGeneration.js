let id = 0
// Генерируем все карточки
itemsArr.forEach(item => {
	let element = document.createElement('li')

	element.classList.add('category-menu__li');
	element.classList.add('category-item');

	let itemNote = ''
	if(item.note != '') {
		itemNote = `<span class="menu-item-note">${item.note}</span>`
	}

	let template = `
<div class="img-container">
	${itemNote}
	<img src="${item.img}" alt="" onError="this.src='${imgPath}'" class="category-item__img item__img ">
</div>
<div class="category-item__body">
	<h3 class="category-item__title title">${item.title}</h3>
	<h3 class="category-item__price title">$${item.price}</h3>
</div>
<p class="category-item__text text">
	${item.description}
</p>
	`
	
	element.innerHTML = template
	itemsList.appendChild(element)
});


const categoryItemsArr = document.querySelectorAll('.category-item')

categoryItemsArr.forEach(item => {
	item.addEventListener('click', () => {
		let description = item.querySelector('.category-item__text')

		description.classList.toggle('active-text')
	})
});
