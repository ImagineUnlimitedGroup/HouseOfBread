let id = 0

// Генерируем все карточки
itemsArr.forEach(item => {
	let element = document.createElement('li')

	// Присваиваем нужные классы
	element.classList.add('category-menu__li');
	element.classList.add('category-item');

	// Проверка на пустую заметку
	let itemNote = ''

	if(item.note != '') {
		itemNote = `<span class="menu-item-note">${item.note}</span>`
	}

	let template = `
<div class="img-container">
	${itemNote}
	<img src="${item.img}" alt="" class="category-item__img item__img " onError="this.src='../img/404H.svg'">
</div>
<div class="category-item__body">
	<h3 class="category-item__title title">${item.title}</h3>
	<h3 class="category-item__price title">$${item.price}</h3>
</div>
<p class="category-item__text text">
	${item.description}
</p>
	`
	
	//Вводим сгенерированный шаблон кода
	element.innerHTML = template
	itemsList.appendChild(element)
});