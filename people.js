let baseUrl = 'http://www.swapi.tech/api/people/1/';

fetch(baseUrl).then(response => response.json()).then(json => {console.log(json)
})
