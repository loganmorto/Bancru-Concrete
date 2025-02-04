document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navWrapper = document.querySelector(".nav-wrapper");

  function isSmallScreen() {
      return window.innerWidth < 768;
  }

  function setupHamburgerMenu() {
      if (isSmallScreen()) {
          // Add event listeners for small screens
          hamburger.addEventListener("click", toggleMenu);
          document.addEventListener("click", closeMenuOnOutsideClick);
      } else {
          // Remove event listeners for larger screens
          hamburger.removeEventListener("click", toggleMenu);
          document.removeEventListener("click", closeMenuOnOutsideClick);

          // Ensure menu is closed
          navWrapper.classList.remove("open");
          hamburger.classList.remove("active");
      }
  }

  function toggleMenu(event) {
      navWrapper.classList.toggle("open");
      hamburger.classList.toggle("active");
      event.stopPropagation(); // Prevent the click from bubbling up to the document
  }

  function closeMenuOnOutsideClick(event) {
      if (!navWrapper.contains(event.target) && !hamburger.contains(event.target)) {
          navWrapper.classList.remove("open");
          hamburger.classList.remove("active");
      }
  }

  // Initial setup
  setupHamburgerMenu();

  // Re-evaluate on window resize
  window.addEventListener("resize", setupHamburgerMenu);
});


document.addEventListener("scroll", () => {
    // Check if screen width is over 768px
    if (window.innerWidth <= 768) {
      return; // Exit early if the screen width is 768px or less
    }
  
    const header = document.querySelector("header");
    const scrollY = window.scrollY;
  
    // Exit early if the scroll position is beyond the threshold
    if (scrollY >= 37) {
      if (header.style.top !== "0px") {
        header.style.top = "0px"; // Ensure it stays at 0
      }
      return;
    }
  
    // Calculate and apply the new top value for scroll positions < 37
    const newTop = 37 - scrollY;
    header.style.top = `${newTop}px`;
  });
  
  
  

  