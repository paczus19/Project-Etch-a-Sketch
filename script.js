//create button, add class, set text content and append as a child of body
const inputButton = document.createElement("button");
inputButton.classList.add("inputButton");
document.body.appendChild(inputButton);
inputButton.textContent = "PICK GRID SIZE";

//add click event that runs a function
inputButton.addEventListener("click", pickGrid) ;

//function that can let user pick a resoultion in pixels
function pickGrid() {
let dimentions = prompt("Choose the resolution (1 - 100)");
if(dimentions>100 || dimentions<=0){ //check if dimentions are not to big
    pickGrid(); }
else {
const sketcher = document.querySelector(".sketcher");
//clear previous grid 
while(sketcher.hasChildNodes()) {
sketcher.removeChild(sketcher.firstChild); }

//function call
createGird(dimentions); } }

//function that create gird with user dimentions
function createGird(dimentions) {
    //random color of pixels
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    let randomColor = `rgb(${x},${y},${z})`;

    const sketcher = document.querySelector(".sketcher");
    for(let i=0; i<dimentions*dimentions; i++) {
    const onePixel = document.createElement("div");
    onePixel.classList.add("onePixel");
    onePixel.style.backgroundColor = "white";
    onePixel.style.width = 800/dimentions + "px";
    onePixel.style.height = 600/dimentions + "px";
    sketcher.appendChild(onePixel);

    //event, if mouse is over a div it changes color
    onePixel.onmouseover = function() {
        onePixel.style.backgroundColor = randomColor;
        onePixel.style.opacity = "90%";
    };
    };  
}

//call function that create 16x16 grid
createGird(16);