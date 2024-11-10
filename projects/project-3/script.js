const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll("nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let nums = document.querySelectorAll(".num");
let container = document.querySelector(".container");

nums.forEach((e) => {
  let start = 99999110;
  let end = e.dataset.num;

  let count = setInterval(() => {
    start++;
    e.textContent = start;
    if (start == end) {
      clearInterval(count);
      e.textContent += "+ Sold";
    }
  }, 2000 / end);
});

const section = document.querySelector("section.vid");
const vid = document.querySelector("video");

vid.pause();

const scroll = () => {
  const distance = window.scrollY - section.offsetTop;
  const total = section.clientHeight - window.innerHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
};

scroll();
window.addEventListener("scroll", scroll);

function learnmore() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
