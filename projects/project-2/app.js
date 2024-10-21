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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".txtcontent");

hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("circle").addEventListener("click", function () {
  const steps = document.querySelectorAll(".steps");
  steps.forEach((step) => {
    step.classList.toggle("navopen");
  });

  // Add functionality to toggle hidden class for .cmenu elements
  hidden();

  // Example to toggle a class on the button itself
  this.classList.toggle("white");
});

function hidden() {
  const cmenu = document.querySelectorAll(".cmenu");
  cmenu.forEach((cmenu) => {
    cmenu.classList.toggle("hidden");
  });
}
