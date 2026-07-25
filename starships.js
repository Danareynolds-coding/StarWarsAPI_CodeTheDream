const starshipsUrl = "https://swapi.dev/api/starships/"
async function starshipsData() {
  try{
    const response = await fetch(starshipsUrl);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
  }
    const data = await response.json();
    const container = document.getElementById('starships');
    container.innerHTML = "";
    data.forEach(item => {
      console.log(item)
      const listItem =`${starship.name}Model:${starship.model}-Pilots:${starship.pilots}`
      container.appendChild(listItem);
    });
}catch (error){
  console.log(error)
}
 
}
starshipsData();