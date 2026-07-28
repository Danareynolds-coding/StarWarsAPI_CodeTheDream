const container = document.getElementById('species');
async function fetchSpecies() {
  const url = ("https://swapi.dev/api/species/")
  try{
    const response = await fetch(url);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
  }
    const data = await response.json();
    container.innerHTML ='';
    
    data.results.forEach(species => {
      const speciesDiv = document.createElement('div');
      speciesDiv.className = "species-card";
      if (!null){
      speciesDiv.innerHTML = `<div><h3>${species.name}</h3><p>Homeworld:${species.homeworld}</p><p>Designation:${species.designation}</p><p>Language: ${species.language}</p><p>Classification: ${species.classification}</p></div> ` 
      container.appendChild(speciesDiv);
    };
  });
  } catch (error) {
      console.error("Failed to fetch starships:", error.message);
      container.innerHTML = `"<p style="color:red;">Failed to Load</p>`;
  }
}
 fetchSpecies();





          