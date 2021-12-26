const title = document.querySelector("div.hello:first-child h1");

title.style.color = "blue";

function handleClick() {
  console.log("clicked!");
}
function handleMouseEnter() {
  title.innerText = "Mouse entered!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
console.dir(title);
