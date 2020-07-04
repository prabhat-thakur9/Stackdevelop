var request=require("request");
request('https://jsonplaceholder.typicode.com/todos/1',function(error,response,body){
	eval(require('locus'))
	if(error){
		console.log("Something went wrong");
	}
	else{
		if(response.statusCode==200){
		var parsedData=JSON.parse(body);
			console.log(parsedData);
		}
	}
});
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//axios.
// const axios=require("axios");
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.title);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });