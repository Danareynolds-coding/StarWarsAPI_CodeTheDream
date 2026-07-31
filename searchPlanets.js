const button = document.getElementById("people-btn");
button.addEventListener("click", getPlanet);

async function getPlanet(targetName) {
  const response = await fetch("https://www.swapi.tech/api/planets/");
  const items = await response.json();

  const foundItem = items.find(item => item.name.toLowerCase() === targetName.toLowerCase());

    if (!foundItem) {
    console.log("Name not found!");
    return null;
  }

  const detailResponse = await fetch(`https://www.swapi.tech/api/planet/?expanded=true${foundItem.id}`);
  const detailedInfo = await detailResponse.json();
  return detailedInfo;

const planets = detailedInfo.result;
const markup = `<div><h3>${planet.name}
<p>Climate:${planets.climate}</p> <p>Terrain:${planets.terrain}</p>  <p>Day: ${planets.rotation_period} hours</p><p>Year: ${planets.orbital_period} days</li> ` ;
document.getElementById('planet').insertAdjacentHTML('beforeend', markup);
};

