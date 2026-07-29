
const spinner = document.getElementById('spinner')
const container = document.getElementById('starships');
async function fetchStarships() {
  const url = "https://www.swapi.tech/api/starships/"
  spinner.style.display = "block";
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
      starshipsDiv.innerHTML = `<div col-xs-1 col-sm-4 col-md-3><h3>${starships.name}</h3> <h4>Model:${starships.model}</h4> <p>Pilots:${starships.pilots}</p></div>`;
      container.appendChild(starshipsDiv)
    });
  } catch (error) {
      console.error("Failed to fetch starships:", error.message);
      container.innerHTML = `"<p style="color:red;">Failed to Load</p>`;
  }finally{
    spinner.style.display ="none";
  }
}
 fetchStarships();
  




    

