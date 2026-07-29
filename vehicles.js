const listElem = document.getElementById('vehicles');

async function fetchAndDisplayVehicles() { 
  const url = "https://www.swapi.tech/api/vehicles/";
  try{
    const response = await fetch(url);
    if (!response.ok) {
             throw new Error('Network response was not ok');
         }
        const data = await response.json();
        // console.log(data);
        const htmlPayload = data.results.forEach(vehicles => {
          listElem.insertAdjacentHTML('beforeend', `
            <li class="list">
            <h3>${vehicles.name}</h3>
            <p>Model:${vehicles.model}</p><p>Crew: ${vehicles.crew}</p>
            <p>Pilots: ${vehicles.pilots}</p>
            </li>
          `);
        })
  } catch (error) {
         console.error('Error:', error);
 }
}
fetchAndDisplayVehicles();