const url = "https://counter10.p.rapidapi.com/";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "6fefec31a2msh37e747a16d3a8c7p1dc2c4jsnc95aa4fbb2e1",
		"X-RapidAPI-Host": "counter10.p.rapidapi.com",
	},
};

fetch(url, options)
	.then((response) => response.json())
    .then(data => console.log(data))