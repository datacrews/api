var request = new XMLHttpRequest();

request.open('GET', "https://api.giphy.com/v1/gifs/trending?api_key=W8ouVecBMESwoqoOmckz8jrW1Ay4kzFi&rating=G");

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	
	
			for (i in parsedData.data) {
				
			
		var name = parsedData.data[i].title;

		var pic = parsedData.data[i].url;
		document.body.style.backgroundImage = "url('"+pic+"')";


		var products = document.createElement('li');

		
		products.innerHTML = name;
		document.body.appendChild(products);
	


}


};


request.send();