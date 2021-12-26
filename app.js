const h1 = document.querySelector("div.hello:first-child h1");

h1.style.color = "blue";

function handleClick() {
  console.log("clicked!");
}
function handleMouseEnter() {
  h1.innerText = "Mouse entered!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
console.dir(h1);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}
function handleWindowOffLine() {
  alert("SOS no wifi");
}
function handleWindowOnLine() {
  alert("Online!");
}

// h1.onclick = handleClick;

h1.addEventListener("click", handleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);
