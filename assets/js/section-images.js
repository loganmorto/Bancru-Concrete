document.addEventListener("DOMContentLoaded", () => {
    // -- BEGIN CONFIG OPTIONS --
    const config = {
      // The largest scale the image will reach
      maxScale: 1.2,
  
      // The smallest scale the image will reach
      minScale: 1.0,
  
      // Controls how quickly the scale falls off from maxScale
      // A larger number will reduce the falloff speed (image stays larger longer).
      // A smaller number will make the image scale down more quickly as it moves away from center.
      distanceFactor: .5,
  
      // Transition duration in seconds
      transitionDuration: 0.3,
  
      // Transition timing function
      transitionEasing: "ease-out"
    };
    // -- END CONFIG OPTIONS --
  
    const images = document.querySelectorAll(".service-icon");
  
    const scaleImage = () => {
      const viewportHeight = window.innerHeight;
  
      images.forEach((image) => {
        // Distance from the vertical center of the screen
        const rect = image.getBoundingClientRect();
        const distanceToCenter = Math.abs(
          rect.top + rect.height / 2 - viewportHeight / 2
        );
  
        /*
         * We start from maxScale and reduce scaling as distanceToCenter grows.
         * distanceFactor controls how quickly the scale changes.
         */
        let scale =
          config.maxScale -
          distanceToCenter / (viewportHeight / config.distanceFactor);
  
        // Clamp the scale so it doesn't go beyond max or below min
        scale = Math.min(Math.max(scale, config.minScale), config.maxScale);
  
        // Apply scale and transition
        image.style.transform = `scale(${scale})`;
        image.style.transition = `transform ${config.transitionDuration}s ${config.transitionEasing}`;
      });
    };
  
    // Trigger on scroll and resize
    window.addEventListener("scroll", scaleImage);
    window.addEventListener("resize", scaleImage);
  
    // Initial trigger
    scaleImage();
  });
  