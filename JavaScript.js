const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const button = document.getElementById("button");

let open = true;

button.addEventListener("click", () => {
  open = !open;

  if (open) {
    sidebar.classList.remove("-translate-x-full");
    button.classList.remove("-translate-x-full");
    main.classList.add("ml-48");
    
  } else {
    sidebar.classList.add("-translate-x-full");
    button.classList.add("-translate-x-full");
    main.classList.remove("ml-48");
    
  }
});



const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const img = slider.querySelector("img");
  const images =
    slider.dataset.images.split(",");
  let current = 0;
  let timer;
  function showImage(index) {
    img.src = images[index];
  }
  function nextImage() {
    current++;
    if (current >= images.length) {
      current = 0;
    }
    showImage(current);
    resetTimer();
  }
  function prevImage() {
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    showImage(current);
    resetTimer();
  }
  function startTimer() {
    timer = setInterval(() => {
      nextImage();
    }, 5000);
  }
  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }
  slider.addEventListener("click", (e) => {
    const width = slider.clientWidth;
    const clickX = e.offsetX;
    if (clickX < width / 2) {
      prevImage();
    } else {
      nextImage();
    }
  });
  startTimer();
});