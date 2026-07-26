const container = document.getElementById('starships');
async function fetchStarships() {
  const url = "https://swapi.dev/api/starships/"
  try{
    const response = await fetch(url);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
  }
    const data = await response.json();
    container.innerHTML ='';
    data.results.forEach(starships => {
      const starshipsDiv = document.createElement('div');
      starshipsDiv.className = "starships-card";
      starshipsDiv.innerHTML = `<h2>${starships.name}</h2> <p>Model:${starships.model}</p> <p>Pilots:${starships.pilots}</p>`;
      container.appendChild(starshipsDiv)
    });
  } catch (error) {
      console.error("Failed to fetch starships:", error.message);
      container.innerHTML = `"<p style="color:red;">Failed to Load</p>`;
  }
}
 fetchStarships();
  




    

