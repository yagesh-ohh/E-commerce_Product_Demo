/** @format */

// /** @format */

let img = document.querySelectorAll(".img a");
// console.log(img);
let imgCount = 1;
img.forEach((img) => {
  img.addEventListener("click", (e) => {
    // console.log(img);
    e.preventDefault();
    imgCount = img.dataset.id;
    console.log(imgCount);
    imageMover();
  });
});
function imageMover() {
  const imgWidth = document.querySelector(".imgShows img").clientWidth;
  let width = (imgCount - 1) * imgWidth;
  console.log(width);
  let imgSwip = document.querySelector(".imgShows");
  console.log(imgSwip);
  let imgChild = imgSwip.children;
  console.log(imgChild);
  (imgSwip.style.transform = `translateX(${-width}px)`),
    (imgSwip.style.objectfit = "cover");
}

let incrCount = 1;
let counter = document.getElementById("counter");
function increase() {
  incrCount++;
  counter.innerText = incrCount;
}

function minus() {
  if (incrCount >= 1) {
    incrCount--;
    counter.innerText = incrCount;
  }
}
