function getPerson() {
  const name = document.getElementById('people').value;
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

