const listElem = document.getElementById('films');
console.log('Target element:', listElem); 

fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then (data => {
        console.log('Data payload:', data);
        data.results.forEach(film => {
        listElem.insertAdjacentHTML('beforeend', `<li>${film.title} (${film.director}) <p>Episode:${film.episode_id}</p><p>film.${film.opening_crawl}</p></li>`);
        })
    })
    .catch(error => console.error('Error fetching', error))

