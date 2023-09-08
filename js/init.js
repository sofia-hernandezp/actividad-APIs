const url = 'https://food-nutrition-information.p.rapidapi.com/food/1497465';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b17c5e7b79msh415b236d890006fp11c205jsnc78fc3d7f0ee',
		'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com'
	}
};


function getJSONData(url, options){
  let result = {};
  showSpinner(); 
  return fetch(url, options) 
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        console.log(result.data); 
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error; 
      return result;
  });
}
