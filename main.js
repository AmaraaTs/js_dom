console.log("Working");

// document.getElementById("text").style.color = "red";
// document.getElementById("text").style.fontSize = "40px";
// document.getElementById("text").style.backgroundColor = "yellow";
// document.getElementById("text").textContent = "Pinecone LLC";
// document.getElementById("text").innerText = "Pinecone company";
// document.getElementById("text2").innerHTML = "<p>Pinecone HTML</p>";

const myElement = document.createElement("h2");
myElement.textContent = "APM LLC";
document.getElementById("test").appendChild(myElement);

console.log(myElement);

const els = document.getElementsByClassName("demo");
console.log("EL", els[0].children);

// DOM EVENT

function handleClick() {
  console.log("Button clicked");
  document.getElementById("text").style.color = "red";
  document.getElementById("text").style.fontSize = "40px";
  document.getElementById("text").style.backgroundColor = "yellow";
  document.getElementById("text").textContent = "Pinecone LLC";
  document.getElementById("text").innerText = "Pinecone company";
  document.getElementById("text2").innerHTML = "<p>Pinecone HTML</p>";
}

function changeee() {
  console.log("Button clicked");
}

const btnEl = document.getElementById("btn");
console.log(btnEl);
btnEl.addEventListener("click", changeee);
