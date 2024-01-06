let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#back-button");
let nextBtn = document.querySelector("#next-button");

scrollContainer.addEventListener("wheel", (ev) => {
  ev.preventDefault();
  scrollContainer.scrollLeft += ev.deltaY;
  scrollContainer.style.scrollBehavior = auto;
});
nextBtn.addEventListener("click", (ev) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", (ev) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
