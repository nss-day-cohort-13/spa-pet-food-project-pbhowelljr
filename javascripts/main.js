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

	object.htmlBuilder = function(array, foodType) {
		content = `<ul class="$foodAnimal">`
		content += `<li><h2>${foodType.toUpperCase()}</h2></li>`;
		for (var i = 0; i < array.length; i++) {
			content += '<ul class="foodBrand">';
			content += `<li><h2>${array[i].name}</h2></li>`;
			console.log(foodType);
			if(foodType === "cat") {
				content += `<li>${array[i].breeds}</li>`;
			};

			for (var c = 0; c < array[i].types.length; c++) {
				content += '<ul class="foodType">';
				content += `<li><h3>${array[i].types[c].type}</h3></li>`;

				for (var p = 0; p < array[i].types[c].volumes.length; p++) {
					content += '<ul class="volumesPrices">'
					content += `<li><h4>${array[i].types[c].volumes[p].name}</h4></li>`;
					content += `<li>$${array[i].types[c].volumes[p].price}</li>`;
					content += '</ul>'
				}
				content += '</ul>'
			};
			content += '</ul>'
		};
		content += '</ul>'


		mainContent.innerHTML += content;
	};

	//RETURNS OBJECT WITH NEW METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(petFood || {});
