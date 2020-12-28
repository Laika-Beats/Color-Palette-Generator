// Global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

// Functions
// generateHex function generates a random color hex starting with '#' and then 6 random characters
function generateHex() {
  const letters = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // add the color to background of div
    div.style.backgroundColor = randomColor;
    // changes text to hex number of generated random color
    hexText.innerText = randomColor;
  });
}

randomColors();
