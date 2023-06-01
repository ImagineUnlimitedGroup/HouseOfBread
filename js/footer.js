// Инициализация гугл карты для Футера
function initMap() {
	var uluru = {lat: 39.67955763123156, lng: -104.87620813150541};

	let map = new google. maps. Map (document. getElementById ('map'), {
		mapId: "e56a41d974f3934e",
		zoom: 17.8, 
		center: uluru
	});

	let marker = new google. maps .Marker({
		position: uluru, map: map
	});
}