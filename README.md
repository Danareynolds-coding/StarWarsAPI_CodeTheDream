# StarWarsAPI_CodeTheDream
## App for Star Wars Information using HTML, Css and Vanilla JS method.

## github:https://github.com/Danareynolds-coding/StarWarsAPI_CodeTheDream  

### This is a very basic API fetch using HTML, CSS and Javascript. I wanted to have show a couple ways to put the info on the page. 
### Therefore, on the films page I used a simple fetch using promises and .then method.  My error handeling was a catch I added to html using "insert.adjacentHtML". On the people page, I used a button to get the info to load using a click event.The error handling was a throw error with a status and a catch at the end added to html using "append child". The planets page was same as films page a simple fetch. On the species page, I use an asnyc funcion to pull up the information, but everything else same. The starships is another async function, but I added a spinner to account for the delay. The vehicles pages are also async functions.

## User Instrution:All the pages are self loading except the people page which requires a simple button push. The initial limit to the Starwars API is 10 , so You will only get the first 10. *Note with this App as with all API Apps there is a slight delay while the fetch is being called. If You want to get a specific information you can use the lable to call a certain peice of data. For example type in Luke Skywalker to pull up his information.