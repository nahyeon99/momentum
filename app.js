const h1 = document.querySelector("div.hello:first-child h1");

function handleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
function handleMouseEnter() {
  h1.innerText = "Mouse entered!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

h1.addEventListener("click", handleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
