const URL = "https://api.nationalize.io?name=";

  function getJSONData(url){
    let result = {};
    return fetch(url) 
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
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;     
        return result;
    });
};

function generateCountryElements(countryData) {
  let elements = '';
  for (let i = 0; i < countryData.length; i++) {
      elements += `
          <div class= "card_image">
              <img src="https://flagsapi.com/${countryData[i].country_id}/flat/64.png" alt="bandera ${countryData[i].country_id}">
          </div>
          <div class= "card_content">
              <p class="card_text"> ${countryData[i].country_id} - ${countryData[i].probability} % </p>
              <hr>
          </div>
    `;
  }
  return elements;
}

document.addEventListener("DOMContentLoaded", ()=>{
 
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchButton"); 
  
  btn.addEventListener("click", () => {
  
    document.getElementById("container").innerHTML = ""

      getJSONData(URL + input.value).then((response) => {
        let nombre = response.data.name;

        console.log(nombre);

        document.getElementById("container").innerHTML += `
        <li class="cards_item">
            <div class="card">
              <h2 class= "card_title">${nombre.toUpperCase()}</h2>
              ${generateCountryElements(response.data.country)}
            </div>
        </li>
        `

      });
  });
});


