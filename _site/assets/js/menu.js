document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navWrapper = document.querySelector(".nav-wrapper");
  
    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function (event) {
      navWrapper.classList.toggle("open");
      this.classList.toggle("active");
      event.stopPropagation(); // Prevent the click from bubbling up to the document
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!navWrapper.contains(event.target) && !hamburger.contains(event.target)) {
        navWrapper.classList.remove("open");
        hamburger.classList.remove("active");
      }
    });
  });
  