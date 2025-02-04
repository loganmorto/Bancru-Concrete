document.addEventListener("DOMContentLoaded", () => {
  const config = {
    maxScale: 1.2,
    minScale: 1.0,
    distanceFactor: 0.4,
    transitionDuration: 0.3,
    transitionEasing: "ease-out"
  };

  const images = document.querySelectorAll(".service-icon");

  const scaleImage = () => {
    if (window.innerWidth >= 768) {
      // If screen is 768px or wider, remove transforms and return
      images.forEach((image) => {
        image.style.transform = "";
        image.style.transition = "";
      });
      return;
    }

    const viewportHeight = window.innerHeight;

    images.forEach((image) => {
      const rect = image.getBoundingClientRect();
      const distanceToCenter = Math.abs(rect.top + rect.height / 2 - viewportHeight / 2);

      let scale = config.maxScale - distanceToCenter / (viewportHeight / config.distanceFactor);
      scale = Math.min(Math.max(scale, config.minScale), config.maxScale);

      image.style.transform = `scale(${scale})`;
      image.style.transition = `transform ${config.transitionDuration}s ${config.transitionEasing}`;
    });
  };

  const checkScreenSize = () => {
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", scaleImage);
      window.addEventListener("resize", scaleImage);
      scaleImage(); // Run on initial load
    } else {
      window.removeEventListener("scroll", scaleImage);
      window.removeEventListener("resize", scaleImage);
      images.forEach((image) => {
        image.style.transform = "";
        image.style.transition = "";
      });
    }
  };

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
