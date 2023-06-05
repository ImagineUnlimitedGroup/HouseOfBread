const itemsList = document.querySelector('.category-menu__list')

let imgPath = '../img/menu/cakes/cakes.svg'

let itemsArr = [
	{
		title: `CHOCOLATE TEMPTATION`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/temtation.png`,
		description: `Layers of chocolate cake made with cocoa from Ecuador, filled with chocolate and hazelnut creams and hazelnut crunch, covered with a chocolate glaze.`
	},
	{
		title: `RICOTTA PISTACHIO CAKE`,
		note: ``,
		price: `4.50`,
		img: `../img/menu/cakes/ricotta.png`,
		description: `Pistachio and ricotta creams separated by sponge cake, decorated with pistachio pieces and dusted with powdered sugar.`
	},
	{
		title: `CAPPUCCINO CAKE`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/cappuccino.png`,
		description: `Alternating layers of espresso drenched chocolate sponge cake and  coffee cream, decorated with cocoa powder.`
	},
	{
		title: `MONTEROSA CAKE`,
		note: ``,
		price: `4.75`,
		img: `../img/menu/cakes/monterosa.png`,
		description: `A creamy mix of mascarpone  and ricotta cheese, divided by a delicate layer of sponge cake, topped with wild strawberries.`
	},
	{
		title: `TIRAMISU CAKE`,
		note: ``,
		price: `4.75`,
		img: `../img/menu/cakes/tiramisu.png`,
		description: `Zabaione cake divided by three layers of espresso-soaked sponge cake, finished with a dusting of cocoa powder.`
	},
	{
		title: `PISTACHIO CHEESECAKE`,
		note: ``,
		price: `4.50`,
		img: `../img/menu/cakes/pistachioCheescake.png`,
		description: `A creamy pistachio cheesecake with pistachio pieces, topped with a light pistachio mousse and sprinkled with pistachios, on a graham cracker base.`
	},
	{
		title: `SELVA NERA CAKE`,
		note: ``,
		price: `4.50`,
		img: `../img/menu/cakes/selvaNera.png`,
		description: `Chocolate sponge cake surrounds a layer of chocolate and Chantilly cream, studded with Amarena cherries, separated by white sponge cake and decorated with a chocolate ribbon. `
	},
	{
		title: `CREME BRULEE CHEESECAKE`,
		note: ``,
		price: `4.75`,
		img: `../img/menu/cakes/cremeBrulee.png`,
		description: `Layered crème brulee with the lightest of cheesecakes, hand fired and mirrored with burnt caramel. `
	},
	{
		title: `SEA SALT CARAMEL CHEESECAKE`,
		note: ``,
		price: `4.95`,
		img: `../img/menu/cakes/9.png`,
		description: `New York cheesecake with a thick swirl of rich caramel and sea salt, topped with Hershey's caramel topping.`
	},
	{
		title: `WHITE CHOCOLATE RASPBERRY CHEESECAKE`,
		note: ``,
		price: `4.50`,
		img: `../img/menu/cakes/raspberry.png`,
		description: `A smooth white chocolate cheesecake swirled with fresh raspberry puree.`
	},
	{
		title: `CHOCOLATE GANACHE CHEESECAKE`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/ganache.png`,
		description: `New York style cheesecake topped with a thick, rich layer of chocolate ganache, sits on a chocolate sponge cake base, all coated with chocolate sponge cake crumbs. `
	},
	{
		title: `LEMON BLUEBERRY CRUMB CHEESECAKE`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/lemonBlueberry.png`,
		description: `A graham cracker base topped with a creamy lemon cheesecake and finished with blueberry streusel crumb.`
	},
	{
		title: `NEW YORK CHEESECAKE`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/newYork.png`,
		description: `New York cheesecake flavored with a hint of Bourbon vanilla, on a sponge cake base. `
	},
	{
		title: `GRANDMOTHERS CAKE`,
		note: ``,
		price: `4.25`,
		img: `../img/menu/cakes/grandmother.png`,
		description: `Pastry cream with a hint of lemon on a base of shortcrust pastry, covered with pine nuts, almonds, and powdered sugar. `
	},
	{
		title: `CREMA CATALANA`,
		note: ``,
		price: `6.00`,
		img: `../img/menu/cakes/cremaCatalana.png`,
		description: `Creamy custard topped with caramelized sugar. `
	},
	{
		title: `ESPRESSO CREME BRULEE`,
		note: ``,
		price: `6.00`,
		img: `../img/menu/cakes/espressoCup.png`,
		description: `Creamy custard flavored with espresso, topped with caramelized sugar. `
	},
	{
		title: `CREME BRULEE WITH BERRIES`,
		note: ``,
		price: `6.00`,
		img: `../img/menu/cakes/berriesCup.png`,
		description: `A layer of raspberry sauce topped with a creamy custard and decorated with mixed berries, coated in caramel.`
	},
	{
		title: `TIRAMISU CUP`,
		note: ``,
		price: `6.00`,
		img: `../img/menu/cakes/tiramisuCup.png`,
		description: `Coffee and Zabaione cream on a layer of sponge cake soaked in espresso, dusted with cocoa powder.`
	}
]
