//**********//XHR//**********//

var petFood = function(object) {
		
	//CALL BACK FOR  REQUESTS LOAD EVENT LISTENERS//
	var addDogFoodXhr = function () {

		//PARSES THE XHR RESPONSE TEXT TO CREATE ARRAY OF OBJECTS//
		var pojo = JSON.parse(this.responseText);

		//ADDS EACH OBJECT IN ARRAY TO  ARRAY//
		for (var i = 0; i < pojo.dogBrands.length; i++) {
			petFood.setDogFoodItem(pojo.dogBrands[i], "push");
		};

		petFood.htmlBuilder(petFood.getDogFoodArray(), "dog");
	};

	//CALL BACK FOR SONG AND LOAD MORE REQUESTS LOAD EVENT LISTENERS//
	var addCatFoodXhr = function () {

		//PARSES THE XHR RESPONSE TEXT TO CREATE ARRAY OF OBJECTS//
		var pojo = JSON.parse(this.responseText);

		//ADDS EACH OBJECT IN ARRAY TO  ARRAY//
		for (var i = 0; i < pojo.catBrands.length; i++) {
			petFood.setCatFoodItem(pojo.catBrands[i], "push");
		};

		petFood.htmlBuilder(petFood.getCatFoodArray(), "cat");
	};

	//INITIAL XHR REQUEST//
	var loadDogFood = function() {

		//CREATES A NEW XHR REQUEST//
		var loadRequest = new XMLHttpRequest();

		//ADDS XHR EVENT LISTENERS FOR LOAD AND ERROR//
		loadRequest.addEventListener("load", addDogFoodXhr);
		loadRequest.addEventListener("error", function() {
			console.log("error");
		});

		//ROUTES AND INTIALIZES THE REQUEST//
		loadRequest.open("GET", "../json/dogFood.json");
		loadRequest.send();
	}();

		//INITIAL XHR REQUEST//
	var loadCatFood = function() {

		//CREATES A NEW XHR REQUEST//
		var loadRequest = new XMLHttpRequest();

		//ADDS XHR EVENT LISTENERS FOR LOAD AND ERROR//
		loadRequest.addEventListener("load", addCatFoodXhr);
		loadRequest.addEventListener("error", function() {
			console.log("error");
		});

		//ROUTES AND INTIALIZES THE REQUEST//
		loadRequest.open("GET", "../json/catFood.json");
		loadRequest.send();
	}();

	//RETURNS OBJECT WITH NEW METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(petFood || {});
