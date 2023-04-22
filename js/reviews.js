const reviewsList = document.getElementById('reviews-slider__list')

// Массив с данными всех категорий меню
let reviewsArr = [
	{
		text: `Gotta say that this is by far the BEST Armenian bakery you'll ever try in Denver! This will be one of my favorite go to places for delicious pastries and great coffee! I had the spinach feta pastry, the beef pastry, the potato pastry, the apricot filled pastry, and the eggs with feta and cheese and prosciutto all halal options. Thank you Ellie for making it a more pleasant experience for me. Everything was stellar!`, 
		author: `Mariam Camacho`
	},
	{
		text: `House of Bread is probably my favorite restaurant I've had in Denver. It's just really good baked goods. Their menu combines middle eastern cuisine with an amazing array of Bakery items. If I lived near this it would be a problem, it's addictive.`, 
		author: `Chase Nelson`
	},
	{
		text: `I have driven by this place for years, and I am so glad I stopped by today. It’s a hidden gem! From amazing desserts and coffee to lunch options that are made from scratch once you order. We tried a couple of things and we are coming back soon. The owners are amazing!`, 
		author: `Anastasia J`
	},
	{
		text: `The House of Bread is AMAZING! The food is AMAZING and the staff is all very kind. Plus, it seems locally and family run which is just a wonderful bonus. The cheese khachapuri was LIFE CHANGING and the potato peraski's were overflowing with flavor. Out of the 10 or so baked goods, they were each amazing and especially the lemon and raspberry cheese cake which had the perfect balance. Literally, I would try every single thing in the cases - it all looks so good. Just a tip though, don't order a bunch of items and eat some of them there while getting the others to go. Although this is an option, I was shorted several of my items. Thankfully I noticed some of them in-store but didn't realize I was missing other items until I was home. It was an obvious mistake and next time, I think I'll do my part by ordering my dine-items first and then doing a separate order to-go`, 
		author: `Kristen Halpern-Morgan`
	},
	{
		text: `MUST TRY!! I found out about this amazing place through tiktok! I entered and noticed that everything was pretty clean! Some workers were having a meeting but when they saw I needed to be helped they jumped up and helped me. They were incredibly helpful to me, and explained some of the most delicious morsels I've ever had. The woman that rang me out and made the drinks was sweet, demure, and beautiful! I will absolutely be back thank you for a great experience!`, 
		author: `Rylo Bennett`
	},
	{
		text: `A hidden gem that is a must for anyone looking for a quality bakery with plentiful options. The ajarski and the megruli kachapuri are to die for! They also have a large amount of savory dishes that are worth calling ahead to order, since everything is prepared fresh. If you didn’t call ahead, expect a wait, but the food is worth hanging around for. We love the chicken shish kabobs and the short ribs in particular! My out of town family is obsessed with House of Bread as well and always ask for me to bring them the beef and potato kachapuri and a mini almond croissant whenever I’m visiting home. Some of their desserts are not as sweet as a lot of other bakeries, but that is to our liking. There is not a lot seating indoors, but we’ve never had an issue finding a seat. There is ample outdoor options as well, weather permitting.`, 
		author: `Marlene Pierce`
	},
	{
		text: `Thank you House of bread for the best bakery / cakes ever!! Finally a place in Denver that is phenomenal ! Eveything is fresh and made by the hour. Their drinks even the simplest latte  tastes 100% Better than Starbucks! Staff is very friendly just a little overwhelmed " but hay, do you blame them? They are slammed! Best of the best,I live in highlands ranch and drive 30 minutes to get here and it's worth every bit!  ❤️ Apologize for my bad picture as I can't stop eating ..`, 
		author: `Carmin Westernoff`
	},
	{
		text: `Been waiting a while to write this review because "They're GREAT!" as a fictional tiger would exclaim.  Don't want to overuse any superlatives but I really REALLY enjoy eating here.  Great variety, great service, fair prices, outdoor seating, on and on.  Go here, try the foods - both savory and sweet.  There are more savory dishes on the menu than the pics here.  But it is well worth the visit.`, 
		author: `John Nguyen`
	},
	{
		text: `Jonathan Orrala`, 
		author: `So delicious! This is the sort of place where eating dessert first is encouraged :) most of the food items take about 35-40 to come out, but well worth it! Either order ahead or grab yourself one of the delicious desserts as you wait for your main course !`
	},
	{
		text: `Hi guys. It's amazing food, bread, cake, hot beverage, pastries. We love everything, your guys are amazing especially Katrina, the gentleman also took the order I think he is the owner, and for sure the guys in the kitchen. ❤️❤️`, 
		author: `sara alkaisy`
	},
	{
		text: `We had two khachapuris which was the perfect amount of food for three people to share. They were freshly made so expect to wait about 20 minutes after you order.  Both were very tasty.`, 
		author: `Margaret Robles`
	},
	{
		text: `I haven’t been in paradise for a long time, I’m busy with the hustle and bustle of life, I cook for children and write poems for crazy people, but today I went there in person and saw the saints. In this house of bread, all languages of the world are perfectly spoken, people are not divided according to faith, there is brotherhood Christians, Muslims, Jews, Hindus, Buddhists and atheists. A real paradise for a person, a house with the smell of bread, the aroma of tea and coffee, homemade sweets, gingerbread, buns, cakes, mom's pies, grandmother's donuts, I'm sorry, I'm not a culinary specialist to remember all the delicacies. At least once a week, we must visit this paradise ourselves. Thank you for this unearthly beauty, only where space ends, you can still find such a miracle.`, 
		author: `uncle Sam`
	},
	{
		text: `Pleasantly surprised by this place! It is located at the end of a small strip mall on Parker Road and easy to miss. But definitely worth a visit. Why is the name so nondescript though? Could be why I never visited this shop. But the baked goods are terrific. Definitely worth checking out. Decor is very modern and the place is clean.`, 
		author: `John Cimino`
	},
	{
		text: `The Ajarski and Megruli Khachapuri  are AMAZING!!!! Some of the best tasting things I've had recently. They do take about 20 minutes to make fresh, but they are SO worth it!`, 
		author: `Kaitlyn Price`
	}
]

// Генерируем все карточки
reviewsArr.forEach(review => {
	let element = document.createElement('li')

	element.classList.add('splide__slide');
	element.classList.add('review__item');

	let template = `
<div class="reviews__item review">
	<div class="review__stars">
		<img src="./img/icons/star.svg" alt="">
		<img src="./img/icons/star.svg" alt="">
		<img src="./img/icons/star.svg" alt="">
		<img src="./img/icons/star.svg" alt="">
		<img src="./img/icons/star.svg" alt="">
	</div>
	<div class="review__text text">
		${review.text}
	</div>
	<div class="review__author text">
		– ${review.author}
	</div>
</div>
	`
	
	element.innerHTML = template
	reviewsList.appendChild(element)
});

// Инициализация слайдера для отзывов
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#reviews-slider', {
		perPage: 3,
		perMove: 1,
		type : 'loop',
		gap: '10px',
		breakpoints: {
			991.98: {
				perPage: 2,
				gap: '10px',
			},
			767.98: {
				perPage: 2,
			},
			479.98: {
				perPage: 1,
			}
		},
	}).mount();
});