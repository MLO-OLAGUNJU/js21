// DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

//another way
const view2 = document.querySelector("#view2");
console.log(view2);

//to change styles
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".views");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  /*evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello world!";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello</h1> <p>This should align right.</p>";
console.log(navbar);
navbar.style.justifyContent = "space-between";

//DOM FAMILY TREE
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

//adding new elements and removing elements from the DOm
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexdirection = "row";
view2.style.flexwrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
};
