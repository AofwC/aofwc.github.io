function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const animation = document.querySelectorAll(".animation-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
      }
    },
    {
      threshold: 0.3,
    }
  );
});

for (let i = 0; i < animation.length; i++) {
  const el = animation[i];
  observer.observe(el);
}
