let colorContainer = document.querySelector(".colorContainer");
let colorText = document.querySelector(".colorText");
let copyButton = document.querySelector(".copyButton");
let GenColorButton = document.querySelector(".GenColorButton");
let body = document.querySelector("body");

//generate random num for rgb
const generateRgbNum = () =>{
    const r = Math.floor(Math.random()*255);//Math.floor remove decimal points Math.random generate random number
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r} , ${g} , ${b})`;
}

//add above rgb() color in colorContainer css when button clicked then colorContainer css change
const updateColor = GenColorButton.addEventListener("click",() =>{
    const color = generateRgbNum(); //calling
    colorContainer.style.backgroundColor = color ;
    colorContainer.style.border = color ;
    colorText.innerText = color;
});

//copy color code
const copyColorCode = () => {
    //create input tag
    const InputTag = document.createElement("input");
    body.appendChild(InputTag);
    InputTag.value = colorText.innerText;
    //copy
    InputTag.select();
    document.execCommand("copy");
    //remove input tag
    body.removeChild(InputTag);
    alert("Color copied to clipboard");           
};

copyButton.addEventListener("click",()=>{
     copyColorCode();
}); 
updateColor();
