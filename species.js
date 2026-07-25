
fetch("https://swapi.dev/api/species/")
    .then(response => {
         if (!response.ok) {
         throw new Error('Network response was not ok');
         }
    return response.json();
    })
  
    .then(data => {
        data.results.forEach(species => {
            const markup = `<li><h3>Name:${species.name}</h3><p>Homeworld:${species.homeworld}</p><p>Designation:${species.designation}</p><p>Language: ${species.language}</p><p>Classification: ${species.classification}</p></li> ` ;
            document.getElementById('species').
            insertAdjacentHTML('beforeend', markup);
            }
            });
        })
    .catch (error => console.error('Error:', error));
    

