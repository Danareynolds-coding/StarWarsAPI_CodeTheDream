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

      const characterPromises = props.characters.map(charURL =>
        fetch(charURL)
        .then(res => res.json())
        .then(charData => charData.result.properties.name)
        .catch( () => "unknown Character")
      );
      const characterNames = await Promise.all(characterPromises);

      const card = document.createElement('div');
      card.className = 'oneFilm-card';
            
      card.innerHTML = `
        <h3>${props.title}</h3>
        <p>Episode: ${props.episode_id}</p>
        <p>Director:${props.director}</p>
        <p>Producer: ${props.producer}</p>
        <p>Release Date: ${props.release_date}</p>
        <h3>Characters:</h3>
        <ul>
          ${characterNames.map(name => `<li>${name}</li>`).join("")}
        </ul>    `;
            oneFilmContainer.appendChild(card);
          }
        } catch(error) {
          console.error("Error fetching data:", error);
          oneFilmContainer.innerHTML = "<p>Error loading data. Try again later.</p>";
        };
    }


   
function getPerson() {
  const name = document.getElementById('people').value.trim;
  const onePersonContainer = document.getElementById('onePersonContainer');

if(!name){
  onePersonContainer.innerHTML = "<p>Enter name.</p>";
  return;
}
const url = `https://swapi.tech/api/people/?search=${name}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    onePersonContainer.innerHTML = "";
    //console.log(data.results);
    if (!data.results || data.results.length === 0){
    onePersonContainer.innerHTML = "<p>Person was not found!</p>";
      return;
    }
    const personURL = data.results[0].url;
    return fetch(personURL);
      .then(response => response.json())
      .then(personData =>{
        if (!personData) return;
        const person = personData.result.properties;
        const card = document.createElement('div');
        card.className = 'onePerson-card';
        card.innerHTML = `
              <h3>${person.name}</h3>
              <p>Species: ${person.species}</p>
              <p>Homeworld:${person.homeworld}</p>
              <p>Birth Year: ${person.birth_year}</p>
            `;
          onePersonContainer.appendChild(card);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          onePersonContainer.innerHTML = "<p>Error loading data. Try again later.</p>";
        });
    }

function getPlanet(){
const title = document.getElementById('planet').value;
const oneFilmContainer = document.getElementById('oneFilmContainer');
oneFilmContainer.innerHTML = "<p>Searching</p>";
if(!title){
  oneFilmContainer.innerHTML = "<p>Enter film title.</p>";
  return;
}
const url = `https://swapi.tech/api/people/?search=${title}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
      if (data.results.length === 0){
      oneFilmContainer.innerHTML = "<p>Film was not found!</p>";
      return;
    }
     data.results.forEach(films => {
            const card = document.createElement('div');
            card.className = 'oneFilm-card';
            
            card.innerHTML = `
              <h3>${films.title}</h3>
              <p>Episode: ${films.episode_id}</p>
              <p>Director:${films.director}</p>
              <p>Producer: ${films.producer}</p>
              <p>Release Date: ${films.release_date}</p>
              <p>Characters: ${films.characters}</p>
            `;
            oneFilmContainer.appendChild(card);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          oneFilmContainer.innerHTML = "<p>Error loading data. Try again later.</p>";
        });
    }
