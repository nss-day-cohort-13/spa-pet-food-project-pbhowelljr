//**********//HTML BUILDER//**********//
	
var petFood = function(object) {
	
	var mainContent = document.getElementById("mainContent");

	object.htmlBuilder = function(array, foodType) {

		content = `<ul class="foodAnimal">`
		content += `<li><h1>${foodType.toUpperCase()}</h1></li>`;

		for (var i = 0; i < array.length; i++) {
			content += '<ul class="foodBrand">';
			content += `<li><h2>${array[i].name}</h2></li>`;

			if(foodType === "cat") {
				content += `<li><b>Breeds:</b> ${array[i].breeds.join(", ")}</li>`;
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
