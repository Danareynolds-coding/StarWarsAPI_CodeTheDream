fetch("https://swapi.dev/api/planets/")
    .then(res => {
         if (!response.ok) {
         throw new Error('Network response was not ok');
        }
    return response.json();
    })
    .then(data => {
        data.forEach(planets => {
            const markup = `<li>Name:${planets.name}</li> 
            <li>Climate:${planets.climate}</li> <li>Name:${planets.terrain}</li>  <li>Day: ${planets.rotation_period}</li> `  
            document.querySelector('ul').insertAjacentHTML('beforeend', markup);
            })
        })
    .catch (error => console.error('Error:', error));
    

