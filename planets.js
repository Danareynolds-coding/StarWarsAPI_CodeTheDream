fetch("https://swapi.dev/api/planets/")
    .then(response => {
         if (!response.ok) {
         throw new Error('Network response was not ok');
        }
    return response.json();
    })
    .then(data => {
        data.results.forEach(planets => {
            const markup = `<li><h3>${planets.name}</h3>
                <p>Climate:${planets.climate}</p> <p>Terrain:${planets.terrain}</p>  <p>Day: ${planets.rotation_period} hours</p><p>Year: ${planets.orbital_period} days</li> ` ;
            document.getElementById('planet').insertAdjacentHTML('beforeend', markup);
            });
        })
    .catch (error => console.error('Error:', error));
    

