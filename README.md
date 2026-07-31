# StarWarsAPI_CodeTheDream
## App for Star Wars Information using HTML, Css and Vanilla JS.

## github:https://github.com/Danareynolds-coding/StarWarsAPI_CodeTheDream  

### This is a very basic API fetch using HTML, CSS and Javascript. The project overall was extremely time consuming because of nuances in the various pages. Also, I wanted to show a couple ways to put the info on the page. 

### Therefore, on the films page I used a async and await  My error handeling was a catch. I added information to the html using "append child" This page was particularly difficult. I originally used a simple fetch and it worked, but the next day it did not work. So I changed to async await. It was confusing cause the layering issue with other categories made me want to use a double fetch, but this one did not need that.

### On the people page, I used a button to get the info to load using a click event listener.  Once again I used async and await. The error handling was a throw error with a status and a catch at the end.

### On the planets page was the call was made with a simple fetch by promises and the .then method. I used the for Each loop to go through the info. It needed a second fetch to get the information that was embedded in a lower level to get the details. To do it different, I used insert.adjacentHTML to add it to the HTML.

### On the species page, I use an asnyc funcion to pull up the information, but everything else same. I had lots of trouble with this one because it kept coming up null, so I had to add "If (species)".

### The starships page is another async function, but I added a spinner to account for the delay.

### The vehicles page is also async functions.Basicly the same as the others.

### The Search pages are beyond my skill I was only able to get the requested info on the top, not by its self.  My attempts to get person also failed. I tried a lot of different ways but could not figue it out. I will keep trying if I have time Aug 16th.

## User Instrution: All the pages are self loading except the people page which requires a simple button push. The button push: If You want to get a specific information you can use the lable to call a certain peice of data. For example type in Luke Skywalker to pull up his information. The initial limit to the Starwars API is 10 , so You will only get the first 10. There is a way to get the other pages but 10 seems sufficent. *Note with this App as with all API Apps there is a slight delay while the fetch is being called. 

## Use Instruction Search Pages: Add the Information to the input field. Be careful of spelling because there is no spelling algorythm attatched. Then push the button and the information will appear after a delay.