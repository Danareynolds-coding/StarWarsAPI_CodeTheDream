const container = document.getElementById('films') 
async function getFilms() {
    const url = "https://www.swapi.tech/api/films/";
    try{
        const response = await fetch(url);
        if (!response.ok){ throw new Error('Network response was not ok');
        }   
        const data = await response.json();
        container.innerHTML ="";
        for(const item of data.result){
            const films = item.properties;

            const filmsDiv = document.createElement('div');
            filmsDiv.className = "films-card";
            filmsDiv.innerHTML = `
                <div>
                    <h3>${films.title}</h3>
                    <p>Episode:${films.episode_id}</p>  
                    <p>${films.opening_crawl}</p>
                    <p>Director:${films.director}</p>
                    <p>Producer:${films.producer}</p>
                                    
                </div>
                `;
            container.appendChild(filmsDiv)
        }
    } catch(error){ console.error('Error fetching', error);
    }
}
getFilms()