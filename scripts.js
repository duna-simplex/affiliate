

// Function to increase progress bar width
function increaseProgress() {
  const progressBar = document.querySelector('.progress .progress-inner');
  let progressWidth = progressBar.style.width.replace('%', '');
  progressWidth = parseFloat(progressWidth);

  // Increase progress width by 10% until it reaches 100%
  if (progressWidth < 100) {
    progressBar.style.width = `${progressWidth + 10}%`;
  }
}

// Script to handle navigation clicks and scrolling
document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('nav#navbar a');

  for (let link of navbarLinks) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

// Add click event listener to the progress bar
document.addEventListener('DOMContentLoaded', () => {
  const progressBarContainer = document.querySelector('.progress-bar');
  progressBarContainer.addEventListener('click', increaseProgress);
});
