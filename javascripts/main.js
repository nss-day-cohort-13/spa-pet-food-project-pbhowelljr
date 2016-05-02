
//**********//MAIN//**********//
var petFood = function(object) {
	
	//ANIMAL FOOD ARRAY DECLARATIONS//
	var dogFood = [];
	var catFood = [];

	//ADDS AN ITEM TO THE DOG FOOD ARRAY//
	object.setDogFoodItem = function(object, method) {
		dogFood[method](object);
		console.log("Dog", dogFood);
	};

	//ADDS AN ITEM TO THE CAT FOOD ARRAY//
	object.setCatFoodItem = function(object, method) {
		catFood[method](object);
		console.log("Cat", catFood);
	};

	//RETURNS THE DOG FOOD ARRAY//
	object.getDogFoodArray = function() {
		return dogFood;
	};


	//RETURNS THE CAT FOOD ARRAY//
	object.getCatFoodArray = function() {
		return catFood;
	};

	//RETURNS OBJECT WITH NEW METHODS ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(petFood || {});
