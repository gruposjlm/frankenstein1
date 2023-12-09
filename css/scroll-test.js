document.addEventListener("DOMContentLoaded", function () {
    // Get the target section
    const targetSection = document.getElementById("footer-test2");
  
    // Scroll slowly to the target section when the page loads
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });