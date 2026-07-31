const button = document.getElementById("film-btn");
button.addEventListener("click", getFilm);

  async function getFilm() {
  const title = document.getElementById('film').value;
  const oneFilmContainer = document.getElementById('oneFilmContainer');
  oneFilmContainer.innerHTML = "<p>Searching</p>";
  if(!title){
  oneFilmContainer.innerHTML = "<p>Enter film title.</p>";
  return;
  }
  const url = `https://swapi.tech/api/films/?search=${title}`;
try{
  const response = await fetch(url); 
  const data = await response.json();
    if (!data.result || data.result.length === 0){
    oneFilmContainer.innerHTML = "<p>Film was not found!</p>";
     return;
    }
    oneFilmContainer.innerHTML = "";

    for(const film of data.result) {
      const props = film.properties;
      const card = document.createElement('div');
      card.className = 'oneFilm-card';
      card.innerHTML = `
        <h3>${props.title}</h3>
        <p>Episode: ${props.episode_id}</p>
        <p>Director:${props.director}</p>
        <p>Producer: ${props.producer}</p>
        <p>Release Date: ${props.release_date}</p>
          `;
            oneFilmContainer.appendChild(card);
          }
        } catch(error) {
          console.error("Error fetching data:", error);
          oneFilmContainer.innerHTML = "<p>Error loading data. Try again later.</p>";
        };
    }

   
