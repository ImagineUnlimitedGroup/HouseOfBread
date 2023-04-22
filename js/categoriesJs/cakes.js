const cakesList = document.querySelector('.category-menu__list')

let cakesArr = [
	{
		title: `CHOCOLATE TEMPTATION`,
		price: `4.25`,
		img: `../img/menu/cakes/chocolateTemtation.png`,
		description: `Layers of chocolate cake made with cocoa from Ecuador, filled with chocolate and hazelnut creams and hazelnut crunch, covered with a chocolate glaze.`
	},
	{
		title: `RICOTTA PISTACHIO CAKE`,
		price: `4.50`,
		img: `../img/menu/cakes/ricottaPistachioCake.png`,
		description: `Pistachio and ricotta creams separated by sponge cake, decorated with pistachio pieces and dusted with powdered sugar.`
	},
	{
		title: `CAPPUCCINO CAKE`,
		price: `4.25`,
		img: `../img/menu/cakes/cappuccinoCake.png`,
		description: `Alternating layers of espresso drenched chocolate sponge cake and  coffee cream, decorated with cocoa powder.`
	},
	{
		title: `MONTEROSA CAKE`,
		price: `4.75`,
		img: `../img/menu/cakes/monterosaCake.png`,
		description: `A creamy mix of mascarpone  and ricotta cheese, divided by a delicate layer of sponge cake, topped with wild strawberries.`
	},
	{
		title: `TIRAMISU CAKE`,
		price: `4.75`,
		img: `../img/menu/cakes/tiramisuCake.png`,
		description: `Zabaione cake divided by three layers of espresso-soaked sponge cake, finished with a dusting of cocoa powder.`
	},
	{
		title: `PISTACHIO CHEESECAKE`,
		price: `4.50`,
		img: `../img/menu/cakes/pistachioCake.png`,
		description: `A creamy pistachio cheesecake with pistachio pieces, topped with a light pistachio mousse and sprinkled with pistachios, on a graham cracker base.`
	},
	{
		title: `SELVA NERA CAKE`,
		price: `4.50`,
		img: `../img/menu/cakes/selvaNeraCake.png`,
		description: `Chocolate sponge cake surrounds a layer of chocolate and Chantilly cream, studded with Amarena cherries, separated by white sponge cake and decorated with a chocolate ribbon. `
	},
	{
		title: `CREME BRULEE CHEESECAKE`,
		price: `4.75`,
		img: `../img/menu/cakes/cremeBruleeCheesecake.png`,
		description: `Layered crème brulee with the lightest of cheesecakes, hand fired and mirrored with burnt caramel. `
	},
	{
		title: `SEA SALT CARAMEL CHEESECAKE`,
		price: `4.95`,
		img: `../img/menu/cakes/seaSaltCaramelCheesecake.png`,
		description: `New York cheesecake with a thick swirl of rich caramel and sea salt, topped with Hershey's caramel topping.`
	},
	{
		title: `WHITE CHOCOLATE RASPBERRY CHEESECAKE`,
		price: `4.50`,
		img: `../img/menu/cakes/WhiteChocolateRaspberryCheesecake.png`,
		description: `A smooth white chocolate cheesecake swirled with fresh raspberry puree.`
	},
	{
		title: `CHOCOLATE GANACHE CHEESECAKE`,
		price: `4.25`,
		img: `../img/menu/cakes/chocolateGanacheCheesecake.png`,
		description: `New York style cheesecake topped with a thick, rich layer of chocolate ganache, sits on a chocolate sponge cake base, all coated with chocolate sponge cake crumbs. `
	},
	{
		title: `LEMON BLUEBERRY CRUMB CHEESECAKE`,
		price: `4.25`,
		img: `../img/menu/cakes/lemonBlueberryCrumbCheesecake.png`,
		description: `A graham cracker base topped with a creamy lemon cheesecake and finished with blueberry streusel crumb.`
	},
	{
		title: `NEW YORK CHEESECAKE`,
		price: `4.25`,
		img: `../img/menu/cakes/newYorkCheesecake.png`,
		description: `New York cheesecake flavored with a hint of Bourbon vanilla, on a sponge cake base. `
	},
	{
		title: `GRANDMOTHERS CAKE`,
		price: `4.25`,
		img: `../img/menu/cakes/grandmotherCheesecake.png`,
		description: `Pastry cream with a hint of lemon on a base of shortcrust pastry, covered with pine nuts, almonds, and powdered sugar. `
	},
	{
		title: `CREMA CATALANA`,
		price: `6.00`,
		img: `../img/menu/cakes/cremaCatalanaCup.png`,
		description: `Creamy custard topped with caramelized sugar. `
	},
	{
		title: `ESPRESSO CREME BRULEE`,
		price: `6.00`,
		img: `../img/menu/cakes/espressoCremeBruleeCup.png`,
		description: `Creamy custard flavored with espresso, topped with caramelized sugar. `
	},
	{
		title: `CREME BRULEE WITH BERRIES`,
		price: `6.00`,
		img: `../img/menu/cakes/cremeBruleeAndBerriesCup.png`,
		description: `A layer of raspberry sauce topped with a creamy custard and decorated with mixed berries, coated in caramel.`
	},
	{
		title: `TIRAMISU CUP`,
		price: `5.00`,
		img: `../img/menu/cakes/tiramisuCup.png`,
		description: `Coffee and Zabaione cream on a layer of sponge cake soaked in espresso, dusted with cocoa powder.`
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

	let template = `
<div class="img-container">
	<img src="${imgPath}" alt="${imgPath}" class="category-item__img item__img ">
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


const categoryItemsArr = document.querySelectorAll('.category-item')

categoryItemsArr.forEach(item => {

	item.addEventListener('click', () => {
		let description = item.querySelector('.category-item__text')

		description.classList.toggle('active-text')
	})
});
