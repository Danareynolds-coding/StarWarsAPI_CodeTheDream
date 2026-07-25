//fetchData();

async function fetchData() {
    try {
        const response = await fetch("https://swapi.dev/api/starships/")
        if (!response.ok) {
             throw new Error('Network response was not ok');
         }
        const data = await response.json();
        console.log(data);
     } catch (error) {
         console.error('Error:', error);
     }
 }


// const display = document.querySelector('#spaceships') 
// const displaySpaceships = async () => {
// const payload = await fetchData()
//   console.log(payload);
// let VehicleDisplay = payload.map((object) => {
//     const{name, model} = object
//     return
//     `<div class="container">
//     <p>Name: ${name}</p>
//     <p>Model: ${model}</p>
//     </div>`
//   }).join("");
//   display.innerHTML = VehicleDisplay
// }
// displayVehicles()
