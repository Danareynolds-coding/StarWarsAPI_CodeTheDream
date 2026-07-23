const getFilms = async () => {
  const url = 'https://www.swapi.tech/api/films/';
  const response = await fetch(url);
  return await response.json();
};
const render = (films) => {
  return films.map(({title, director}) => `<li>${title} (${director})</li>`).join('');
};
(async () => {
  // show the loading element
  const loadingElem = document.querySelector('#loading');
  loadingElem.innerHTML = 'Loading...';
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // delay 2 seconds
  try {
    const films = await Films();
    document.querySelector('#content').innerHTML = `<ul>${render(films)}</ul>`;
  } catch (err) {
    document.querySelector('#message').textContent = err.message;
  } finally {
    loadingElem.innerHTML = '';
  }
})();


//people fetch
async function fetchData() {
    try {
        const response = await fetch('fetch("https://www.swapi.tech/api/people/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
//planets fetch
async function fetchData() {
    try {
        const response = await fetch('https://www.swapi.tech/api/vehicles/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    }
}
fetchData();
//spacesips fetch
async function fetchData() {
    try {
        const response = await fetch('https://www.swapi.tech/api/vehicles/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    }
}
fetchData();

//vehicles fetch
async function fetchData() {
    try {
        const response = await fetch('https://www.swapi.tech/api/vehicles/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    }
}
fetchData();
