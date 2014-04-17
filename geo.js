$(geo);

function geo() {
	var geo = navigator.geolocation;
	var opciones = {};

	function geo_error(geo) {
		console.log(geo);
		console.log("not allowed");
	}

	function geo_success(geo) {
		var lat = geo.coords.latitude;
		var lon = geo.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x300&sensor=false&center="+lat+","+lon;
		$("#geo").append(mapa);

		console.log(geo);
		console.log("allowed");
	}



	geo.getCurrentPosition(geo_success,geo_error,opciones);
}