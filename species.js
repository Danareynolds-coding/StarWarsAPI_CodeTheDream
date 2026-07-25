
fetch("https://swapi.dev/api/species/")
  .then(response =>  {
    if (!response.ok){
      throw new Error("Can not fetch.")
    }
  data = response.json()
  return data
})
.then(data => {
  const parsedData =JSON.parse(data)
  data.forEach(file => {
  const element =
  `<h2>Name: ${data.name}</h2>
   <p>Class: ${data.classification}</p>
   <p>Homeworld:${data.language}</p>
   <p>Charaters:${data.people}</p>`
  document.querySelector('div').insertAdjacentHTML('beforeend', element)
  })
})
.catch(error => console.log(error))

