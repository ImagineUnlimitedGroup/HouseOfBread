const itemsList = document.querySelector('.category-menu__list')

let imgPath = '../img/menu/salads/salad.svg'

let itemsArr = [
	{
		title: `RICE PLAV`,
		note: `35 Min`,
		price: `8.99`,
		img: `../img/menu/salads/1.png`,
		description: `Seasoned rice plav`
	},
	{
		title: `UZBEK PLAV`,
		note: `< 3 lb`,
		price: `13.99`,
		img: `../img/menu/salads/2.png`,
		description: `Plav loaded with beef chunks, carrots, chickpeas, and garlic.`
	},
	{
		title: `AJIKA`,
		note: `1 lb`,
		price: `9.99`,
		img: `../img/menu/salads/3.png`,
		description: `Spicy red pepper dip with garlic and spices. No sides included.`
	},
	{
		title: `EGGPLANT CAVIAR`,
		note: `1 lb`,
		price: `9.99`,
		img: `../img/menu/salads/4.png`,
		description: `Pureed eggplant dip with spices. No sides included.`
	},
	{
		title: `HUMMUS`,
		note: `1 lb`,
		price: `9.99`,
		img: `../img/menu/salads/5.png`,
		description: `Pureed chickpeas dip with tahini, sprinkled with red pepper. No sides included.`
	},
	{
		title: `BABA GHANOUSH`,
		note: `1 lb`,
		price: `9.99`,
		img: `../img/menu/salads/6.png`,
		description: `Pureed eggplants dip with tahini and garlic. No sides included.`
	},
	{
		title: `VEGETARIAN TOLMA`,
		note: `1 lb`,
		price: `10.99`,
		img: `../img/menu/salads/7.png`,
		description: `Grape leaves stuffed with rice, greens, and spices. No sides included.`
	},
	{
		title: `STALICHNI SALAD`,
		note: `1 lb`,
		price: `12.99`,
		img: `../img/menu/salads/8.png`,
		description: `Traditional Russian potato salad with peas, potatoes, carrots, halal beef, and seasoning. No sides included.`
	},
	{
		title: `GRILLED VEGETABLE SALAD`,
		note: `1 lb`,
		price: `12.99`,
		img: `../img/menu/salads/9.png`,
		description: `Grilled eggplants, bell pepper, and tomatoes mixed with onions, parsley, and seasoning. No sides included.`
	},
]