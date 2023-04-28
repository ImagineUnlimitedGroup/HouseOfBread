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
	
	//Вводим сгенерированный шаблон кода
	element.innerHTML = template
	itemsList.appendChild(element)
});


// Обюработка открытий карточек
const categoryItemsArr = document.querySelectorAll('.category-item')

categoryItemsArr.forEach(item => {
	item.addEventListener('click', () => {

		// Перед тем как открыть описание одной карточки
		// закрываем все остальные
		categoryItemsArr.forEach(item => {
			let description = item.querySelector('.category-item__text')
			description.classList.remove('active-text')
		})

		let currentDescription = item.querySelector('.category-item__text')

		currentDescription = item.querySelector('.category-item__text')

		currentDescription.classList.toggle('active-text')
	})
});
