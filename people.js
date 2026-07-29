
const loadButton = document.getElementById('loadButton');
const container = document.getElementById('peopleContainer'); 
loadButton.addEventListener('click', fetchPeople);
 async function fetchPeople() {
  container.innerHTML = '<p>Loading data...</p>';
  try{
    const response = await fetch('https://www.swapi.tech/api/people/');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
     container.innerHTML ='';
    for (const item of data.results) {
      const res = await fetch(item.url);
      const peopleData = await res.json();
      const person = peopleData.result.properties;
          const personDiv = document.createElement('div');
          personDiv.className = "person-card";
          personDiv.innerHTML = `
          <h3>Name:${person.name}</h3>
          <p>Born: ${person.birth_year}</p>
          <p>Homeworld: ${person.homeworld}
          <p>Films: ${person.films}<p>`;
          container.appendChild(personDiv);
        }
}   catch (error){
    console.error('Fetch failed:', error);
    container.innerHTML = `<p style="color:red;">Failed to load`
  }
}

 
