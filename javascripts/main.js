//**********//MAIN//**********//
	
var petFood = function(object) {
	
	var mainContent = document.getElementById("mainContent");

	var dogFood = [];
	var catFood = [];

	object.setDogFoodItem = function(object, method) {
		dogFood[method](object);
		console.log("Dog", dogFood);
	};

	object.setCatFoodItem = function(object, method) {
		catFood[method](object);
		console.log("Cat", catFood);
	};

	object.getDogFoodArray = function() {
		return dogFood;
	};

	object.getCatFoodArray = function() {
		return catFood;
	};

	//RETURNS OBJECT WITH NEW METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(petFood || {});
