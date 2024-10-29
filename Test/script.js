const dogTexts = [
  'The protagonist, <span class="title">Alice in Wonderland</span>, is a curious and adventurous young girl who finds herself tumbling down a rabbit hole into a topsy-turvy world. Throughout her encounters with peculiar creatures like the Cheshire Cat, the Mad Hatter, and the Queen of Hearts, Alice navigates through a series of fantastical events that challenge logic and reason. Carroll\'s playful language and clever wordplay add an extra layer of enjoyment to the story, creating a unique reading experience.',
  '<span class="title">Alice in Wonderland</span> by Lewis Carroll is a whimsical and enchanting tale that takes readers on a delightful journey through a world of absurdity and imagination. Carroll\'s storytelling is incredibly imaginative, filled with quirky characters and nonsensical situations that will captivate readers of all ages.',
];

let currentIndex = 0;
let isChanging = false;
let currentSet = dogTexts; // Start with dog texts
let lastScrollPosition = 0; // Track the last scroll position

function changeText(scrollUp) {
  if (isChanging) return; // Prevent multiple changes at once
  isChanging = true;

  const textElement = document.getElementById("text");

  // Fade out the current text
  textElement.style.opacity = 0;

  setTimeout(() => {
    // Adjust the index based on scroll direction
    if (scrollUp) {
      currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
    } else {
      currentIndex = (currentIndex + 1) % currentSet.length;
    }

    // Update the text content with innerHTML
    textElement.innerHTML = currentSet[currentIndex];

    // Set the overall text color to red
    textElement.style.color = "red";

    // Trigger a reflow
    void textElement.offsetWidth; // Force a reflow

    // Fade in the new text
    textElement.style.opacity = 1;
    isChanging = false; // Allow text change again
  }, 500); // Duration for fade-out and change
}

// Listen for scroll events
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const scrollUp = scrollPosition < lastScrollPosition;
  lastScrollPosition = scrollPosition;

  // Change text every 100 pixels of scroll
  if (Math.abs(scrollPosition % 100) < 5) {
    changeText(scrollUp);
  }
});

// Initialize the text
changeText(false);
