document.addEventListener('DOMContentLoaded', function() {
    // Get the target section
    const targetSection = document.getElementById('footer-test2');

    // Add a delay of 1000 milliseconds (1 second)
    setTimeout(function() {
        // Scroll slowly to the target section after the delay
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1000);
});