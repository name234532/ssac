//html4 api

console.log(document.getElementById("text1"));
console.log(document.getElementsByClassName("text2"));
console.log(document.getElementsByTagName("div"));

//html5 api
console.log(document.querySelector("#text1"));
console.log(document.querySelector(".text2"));
console.log(document.querySelector("div"));

console.log(document.querySelectorAll(".text"));
console.log(document.querySelectorAll("div"));

document.getElementById("text1").innerHTML = "Hello World";

const para = document.createElement("p");
const node = document.createTextNode("Hello");
const element = para.appendChild(node);

document.querySelectorAll(".text2")[0].appendChild(element);

document.querySelectorAll(".text2")[1].appendChild(element);

for (let i = 0; i < 4; i++) {
  const para2 = document.createElement("p");
  const node2 = document.createTextNode("loHTML5 ");
  const element2 = para.appendChild(node2);
  document.querySelectorAll(".text2")[i].appendChild(element2);
}

// document.querySelector(".text2").appendChild("<p>Append Node.</p>");

$(function () {
  $(".text2").append("Append Jquery Node.");
});
