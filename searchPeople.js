const button = document.getElementById("people-btn");
button.addEventListener("click", getPerson);

function getPerson() {
  const name = document.getElementById('people').value.trim();
  const onePersonContainer = document.getElementById('onePersonContainer');

  if(!name){
  onePersonContainer.innerHTML = "<p>Enter name.</p>";
  return;
  }
const url = `https://swapi.tech/api/people/?search=${name}`;

try{
  const response = await fetch(url);
  const data = await response.json();
  onePersonContainer.innerHTML = "";
  if (!data.results || data.results.length === 0){
  onePersonContainer.innerHTML = "<p>Person was not found!</p>";
  return;
  } 
  const personURL = data.results[0].url;
  const personRes = await fetch(personURL);
  const personData = await personRes.json();
  const person = personData.result.properties;

  let speciesName = "Unknown";
    if (person.species) {
    const speciesRes = await fetch(person.species);
    const speciesData = await speciesRes.json();
    speciesName = speciesData.result.properties.name;
  }

  let homeworldName = "Unknown";
  if (person.homeworld) {
    const homeRes = await fetch(person.homeworld);
    const homeData = await homeRes.json();
    homeworldName = homeData.result.properties.name;
      }

  const card = document.createElement('div');
  card.className = 'onePerson-card';
  card.innerHTML = `
    <h3>${name}</h3>
    <p>Species: ${speciesName}</p>
    <p>Homeworld:${homeworldName}</p>
    <p>Birth Year: ${person.birth_year}</p>
      `;
    onePersonContainer.appendChild(card);
    }
    catch(error){
      console.error("Error fetching data:", error);
    onePersonContainer.innerHTML = "<p>Error loading data. Try again later.</p>";
    }
}

