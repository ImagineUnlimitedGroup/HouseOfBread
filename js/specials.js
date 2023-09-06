let specialsArr = [
	{
		title: `JINGALOV BREAD`,
		img: `./img/specials/jingyalovBread.png`,
		description1: `The newest traditional Armenian item that has been added to our menu.`,
		description2: `Grilled flatbread stuffed with 22+ kinds of greens and herbs, with a hint of citrus flavors and a tiny kick of spice.`,
		description3: `Available Sundays only!`
	},
	{
		title: `GEORJIAN MEGRULI`,
		img: `./img/specials/megruli.png`,
		description1: `Savor the authentic taste of Georgia with our Megruli Khachapuri - a cheesy, golden delight that's pure culinary magic!`,
		description2: `Satisfy your cravings and experience a taste of tradition today!`,
		description3: ``
	},
	{
		title: `SINI MANTE`,
		img: `./img/specials/mante.png`,
		description1: `Savor the exquisite flavors of Sini Mante, a culinary masterpiece of savory dumplings, blending rich meats and spices in delicate, thin dough.`,
		description2: `Taste tradition like never before!`,
		description3: ``
	}
]


// get random index value
const randomIndex = Math.floor(Math.random() * specialsArr.length);

// get random item
const item = specialsArr[randomIndex];
const specialsContainer = document.getElementById("specials")


const template = `
<div class="specials__container">
	<img src="${item.img}" alt="Specials" class="specials__img-mob">
	<h2 class="specials__title title">${item.title}</h2>
	<div class="specials__subtitle">
		<p class="text">
			${item.description1}
		</p>
		<p class="text">
			${item.description2}
		</p>
		<p class="text">
			${item.description3}
		</p>
	</div>
	<img src="${item.img}" alt="Specials" class="specials__img">
</div>
`

specialsContainer.innerHTML = template


