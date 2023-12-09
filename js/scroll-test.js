document.addEventListener("DOMContentLoaded", function () {
    // Get the target section
    const targetSection = document.getElementById("button-content-test");
  
    // Scroll slowly to the target section when the page loads
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });