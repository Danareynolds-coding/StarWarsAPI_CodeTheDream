const container = document.getElementById('species');
async function fetchSpecies() {
  const url = "https://www.swapi.tech/api/species/";
  try{
    const response = await fetch(url);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
  }
    const data = await response.json();
    container.innerHTML ='';
    //async does not support for each loop.
      for (const item of data.results) {
      const res = await fetch(item.url);
      const speciesData = await res.json();
      const species = speciesData.result.properties;
      
      if (species.name){
        const speciesDiv = document.createElement('div');
        speciesDiv.className = "species-card";
        speciesDiv.innerHTML = `<div><h3>${species.name}</h3><p>Homeworld:${species.homeworld}</p><p>Designation:${species.designation}</p><p>Language: ${species.language}</p><p>Classification: ${species.classification}</p></div> ` ;
      container.appendChild(speciesDiv);
    }
  }
} catch (error) {
      console.error("Failed to fetch species:", error.message);
      container.innerHTML = `"<p style="color:red;">Failed to Load</p>`;
  }
}
fetchSpecies();





          