const itemsList = document.querySelector('.category-menu__list')

let imgPath = '../img/menu/pastries/pastries.svg'

let itemsArr = [
	{
		title: `NAPOLEON`,
		note: ``,
		price: `3.25`,
		img: `../img/menu/pastries/napoleon.webp`,
		description: `Triple layered puff pastry spread with our signature vanilla custard cream, covered in its own crumbs, topped with powdered sugar. `
	},
	{
		title: `BIRD MILK`,
		note: ``,
		price: `3.75`,
		img: `../img/menu/pastries/birdMilk.webp`,
		description: `Layered vanilla/honey flavored cake with alternating layers of light cream, topped with a chocolate glaze. `
	},
	{
		title: `HONEY CAKE`,
		note: ``,
		price: `3.75`,
		img: `../img/menu/pastries/honeyCake.webp`,
		description: `Layered honey flavored cake with alternating layers light cream, topped with cake crumbs. `
	},
	{
		title: `CHOCOLATE YOJIK`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/pastries/yojikCh.webp`,
		description: `Double-layered chocolate cake with our signature vanilla custard cream, covered in its own crumbs. `
	},
	{
		title: `VANILLA YOJIK`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/pastries/yojikVanilla.webp`,
		description: `Double-layered vanilla cake with our signature vanilla custard cream, covered in its own crumbs. `
	},
	{
		title: `PONCHIK - CUSTARD`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/pastries/ponchikCustard.webp`,
		description: `Deep-fried bread stuffed with vanilla custard, sprinkled with powdered sugar.`
	},
	{
		title: `PONCHIK - NUTELLA`,
		note: ``,
		price: `6.00`,
		img: `../img/menu/pastries/ponchikNutella.webp`,
		description: `Deep-fried bread stuffed with Nutella, sprinkled with powdered sugar.`
	},
	{
		title: `PONCHIK - APRICOT JAM`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/pastries/`,
		description: `Deep-fried bread stuffed with apricot jam, sprinkled with powdered sugar.`
	},
	{
		title: `STRAWBERRY CREME CROISSANT`,
		note: ``,
		price: `4.25`,
		img: `../img/menu`,
		description: `Croissant filled with strawberry cream.`
	},
	{
		title: `CHOCLATE CROISSANT`,
		note: ``,
		price: `3.75`,
		img: `../img/menu`,
		description: `Croissant filled with chocolate.`
	},
	{
		title: `CUSTARD CROISSANT`,
		note: ``,
		price: `3.50`,
		img: `../img/menu`,
		description: `Croissant filled with vanilla custard.`
	},
	{
		title: `MAPLE PECAN DANISH`,
		note: ``,
		price: `4.00`,
		img: `../img/menu`,
		description: `A sweet and flaky pastry topped with a delightful blend of maple syrup and crunchy pecans.`
	},
	{
		title: `BLACKBERRY CHEESE DANISH`,
		note: ``,
		price: `3.50`,
		img: `../img/menu`,
		description: `A Sweet pastry filled with cream cheese and blackberry jam.`
	}
]
