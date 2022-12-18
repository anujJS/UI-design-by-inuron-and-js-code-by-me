let val = document.querySelector("button");

let bgc = document.querySelector("#background")
const randomColor=() => {
let num = "1234567890ABCDEF";
let sum = "#";
 
for (let i = 0; i < 6; i++) {
    sum = sum + num[Math.floor(Math.random()*16)];
    
}
return sum;
}
const randomColorChange = () => {
    bgc.style.backgroundColor = randomColor();
}




val.addEventListener("click",randomColorChange);