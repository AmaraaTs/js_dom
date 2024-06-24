const boxx = document.getElementsByClassName("box");
console.log(boxx[0]);
boxx[0].style.height = "400px";
boxx[0].style.width = "400px";
boxx[0].style.backgroundColor = "yellow";
boxx[0].style.marginLeft = "auto";
boxx[0].style.marginRight = "auto";

const btnn = document.getElementsByClassName("btn");
btnn[0].style.width = "100px";
// btnn[0].style.marginLeft = "auto";
// btnn[0].style.marginRight = "auto";
btnn[0].style.margin = "auto";
btnn[0].style.marginTop = "10px";

const colors = ["green", "red", "blue"];
let i = 0;
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);

function generateColor() {
  const randColor1 = Math.floor(Math.random() * 256);
  const randColor2 = Math.floor(Math.random() * 256);
  const randColor3 = Math.floor(Math.random() * 256);
  //   return "rgb(" + randColor1 + "," + randColor2 + "," + randColor3 + ")";
  return `rgb(${randColor1},${randColor2},${randColor3})`;
}
function changeColor() {
  boxx[0].style.backgroundColor = generateColor();
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}

btnn[0].addEventListener("click", changeColor);
console.log(btnn[0]);
