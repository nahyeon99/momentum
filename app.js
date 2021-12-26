const h1 = document.querySelector("div.hello:first-child h1");

// function handleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// toggle을 사용하는 경우
function handleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleClick);
