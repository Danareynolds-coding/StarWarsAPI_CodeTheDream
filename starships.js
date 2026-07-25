const starshipsUrl = "https://swapi.dev/api/starships/"

async function starshipsData() {
  try{
    const response = await fetch(starshipsUrl);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
  }
    const data = await response.json();
    .then(data => {
      data.results.forEach(item => {
      `${item.name}-Model:${item.model}-Pilots:${item.pilots.length}`
    });
    }) 
    
}catch (error){
  console.error("failed", error)
}
}
starshipsData();