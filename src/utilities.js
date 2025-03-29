//get the current year and r
function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  const copyrightString = `&copy; ${currentYear} Thom Bator`;
  const copyrightElement = document.querySelector(".copyright-year");
  console.log(copyrightString);
  console.log(copyrightElement);
  copyrightElement.innerHTML = copyrightString;
}

//This function triggersdog snoring css animation at semi-random intervals
function triggerSnore() {
  const snoreLine = document.querySelector(".snore-line");
  const zzzz = document.querySelector(".zzzz");

  // Add "active" class to trigger animation
  snoreLine.classList.add("active");
  zzzz.classList.add("active");

  // Remove the "active" class after the animation duration (2.5s)
  setTimeout(() => {
    snoreLine.classList.remove("active");
    zzzz.classList.remove("active");
  }, 2400); // Matches animation duration

  // Repeat after 10-15 seconds
  setTimeout(triggerSnore, Math.random() * (15000 - 10000) + 10000); // Random interval between 10-15s
}

// Start the snore effect
document.addEventListener("DOMContentLoaded", () => {
  getCurrentYear();
  setTimeout(triggerSnore, 1000); // Start after 1s initial delay
});
