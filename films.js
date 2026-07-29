function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
fetch("https://www.swapi.tech/api/films/")
    .then(response => {
        if (!response.ok) {
         throw new Error('Network response was not ok');
        }
    return response.json();
    })
    .then(data => {
        return wait(1000).then(() => {
          data.results.forEach(item => {
            fetch(item.url)
                .then(res => res.json()) 
                .then(filmData => {
                const films = filmData.result.properties;
                const markup =
                `<li>
                    <h3>${films.title}</h3>
                    <p>Director: (${films.director})</p>
                    <p>Episode:${films.episode_id}</p>                  
                    <p>${films.opening_crawl}</p>
                </li>`;
                document.getElementById('films').insertAdjacentHTML('beforeend', markup);
                });
        });
    });
})
  
.catch(error => console.error('Error fetching', error));