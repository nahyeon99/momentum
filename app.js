e.addEventListener("click", handleTitleclick);

const title = document.querySelector("div.hello:first-child h1");
title.style.color = "blue";
function handleTitleClick() {
  console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick);
