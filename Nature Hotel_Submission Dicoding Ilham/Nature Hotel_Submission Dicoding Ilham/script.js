const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
});
