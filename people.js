 let person = document.getElementById('people')

const getPersonData = async () => {
    try{
      const response = await fetch("https://swapi.dev/api/people/1/");
        if (!response.ok) {
             throw new Error('Network response was not ok');
         }
        const data = await response.json()
        .then(
        person.innerHTML = `<h1>${json.name}
 <h1> <p>born ${json.birth_year} on ${json.homeworld}</p><p>Films: ${json.films}<p> Spaceships: ${json.vehicles}</p>`)
        
      } catch (error) {
         console.error('Error:', error);
 }
}
getPersonData();