const display = document.querySelector('#vehicles')

const getVehicleData = async () => { 
  try{
    const response = await fetch("https://swapi.dev/api/vehicles/");
    if (!response.ok) {
             throw new Error('Network response was not ok');
         }
        const data = await response.json
        console.log(data)
  } catch (error) {
         console.error('Error:', error);
  return data
 }
const displayVehicles = async () => {
  const vehicles = await getVehicleData()
  console.log(vehicles);
  let VehicleDisplay = vehicles.map(({name, model}) => {
    `<li>${name} (${model}</li>`.join("");
  display.innerHTML = VehicleDisplay;
})
};
displayVehicles();
