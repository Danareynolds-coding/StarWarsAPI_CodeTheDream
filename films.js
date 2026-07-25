const getFilms = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    .then(resonse => {
    if (!response.ok) {
             throw new Error('Network response was not ok');
         }
const data = await response.json();
console.log(data);{
        }
    catch (error) {
         console.error('Error:', error);
  return data
 };
}
getFilms()
 
// const render = (films) => {
// return films.map(({title, director}) => `<li>${title} (${director})</li>`).join('');
//  };
// (async () => {
// const loadingElem = document.querySelector('#loading');
// loadingElem.innerHTML = 'Loading...';
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// await delay(2000); // delay 2 seconds
// try {
// const films = await Films();
// document.querySelector('#content').innerHTML = `<ul>${render(films)}</ul>`;
// } catch (err) {document.querySelector('#message').textContent = err.message;
// } finally {
// loadingElem.innerHTML = '';
// }
// });




