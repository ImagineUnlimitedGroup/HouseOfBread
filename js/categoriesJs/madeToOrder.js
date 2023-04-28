const itemsList = document.querySelector('.category-menu__list')

let imgPath = '../img/menu/madeToOrder/steak.svg'

let itemsArr = [
	{
		title: `JINGALOV BREAD`,
		note: `SUNDAYS ONLY`,
		price: `10.99`,
		img: ``,
		description: `Thin grilled flatbread stuffed with 22+ greens and herbs.`
	},
	{
		title: `KHINKALI DUMPLINGS`,
		note: `6 pieces`,
		price: `18.00`,
		img: ``,
		description: `Georgian dumplings stuffed with a seasoned beef patty. 6 pieces per order.`
	},
	{
		title: `VEGETARIAN PLATE`,
		note: `35 min`,
		price: `15.99`,
		img: ``,
		description: `5 piece vegetarian tolma, rice plav, grilled vegetable salad, hummus, and bread. `
	},
	{
		title: `AJARSKI KHACHAPURI`,
		note: `15 min`,
		price: `13.99`,
		img: ``,
		description: `A baked bread boat with feta and mozzarella cheese, topped with two easy-baked eggs.`
	},
	{
		title: `AJARSKI KHACHAPURI WITH BASTURMA`,
		note: `20 min`,
		price: `17.49`,
		img: ``,
		description: `A baked bread boat with feta and mozzarella cheese, topped with two easy-baked eggs, and lined with Armenian-style beef prosciutto. `
	},
	{
		title: `AJARSKI KHACHAPURI WITH TOMATO`,
		note: `20 min`,
		price: `17.49`,
		img: ``,
		description: `A baked bread with feta and mozzarella cheese, topped with two easy-baked eggs, and lined with a seasoned tomato scramble. `
	},
	{
		title: `AJARSKI KHACHAPURI WITH NUTELLA & FRUIT`,
		note: `15 min`,
		price: `18.99`,
		img: ``,
		description: `A baked bread with a load of Nutella, topped with various fruit, sprinkled with powdered sugar and drizzled in chocolate syrup. `
	},
	{
		title: `MEGRULI KHACHAPURI`,
		note: `25 min`,
		price: `16.99`,
		img: ``,
		description: `A round, baked bread stuffed with a Greek feta, mozzarella, and egg mixture.`
	},
	{
		title: `LAHMAJUN - HALAL BEEF`,
		note: `15 min`,
		price: `2.45`,
		img: ``,
		description: `Thin, round dough topped with Halal beef, herbs, and spices, baked to a golden crisp.`
	},
	{
		title: `LAHMAJUN - CHEESE`,
		note: `15 min`,
		price: `2.25`,
		img: ``,
		description: `Thin, round dough topped with feta/mozzarella and spices mix, baked to a golden crisp.`
	},
	{
		title: `LAHMAJUN - ZAATAR`,
		note: `15 min`,
		price: `2.25`,
		img: ``,
		description: `Thin, round dough topped with oregano, thyme, and sesame seeds olive oil mixture, baked to a golden crisp.`
	},
	{
		title: `SINI MANTE`,
		note: `25 min`,
		price: `17.99`,
		img: ``,
		description: `Mini open beef dumplings, cooked in tomato sauce, served with garlic yogurt.`
	},
	{
		title: `ICHLI KYUFTA`,
		note: `6 pieces / 25 min`,
		price: `16.00`,
		img: ``,
		description: `Boiled meat-stuffed bulgur.`
	},
	{
		title: `LAMB CHOP SHASHLIK / KHOROVATS`,
		note: `2-3 pieces / 1 lb`,
		price: `17.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY.  Price is for raw weight.`
	},
	{
		title: `CHICKEN SHASHLIK / KHOROVATS`,
		note: `5-6 pieces / 1 lb`,
		price: `15.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight.`
	},
	{
		title: `CHICKEN LULE`,
		note: `4 pieces / 1 lb`,
		price: `8.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight. About 4 pieces per pound.`
	},
	{
		title: `BEEF SHASHLIK / KHOROVATS`,
		note: `4-5 pieces / 1 lb`,
		price: `16.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight. `
	},
	{
		title: `BEEF LULE`,
		note: `4 pieces / 1 lb`,
		price: `11.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight. About 4 pieces per pound. `
	},
	{
		title: `PORK SHASHLIK / KHOROVATS`,
		note: `4-5 pieces / 1 lb`,
		price: `8.99`,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight.`
	},
	{
		title: `PORK BABYBACK RIBS SHASHLIK / KHOROVATS`,
		note: `3-4 pieces / 1 lb`,
		price: ``,
		img: ``,
		description: `MINIMUM 8 POUND ORDER REQUIRED. WEEKENDS ONLY. Price is for raw weight.`
	}
]