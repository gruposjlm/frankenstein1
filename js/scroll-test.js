window.smoothScrollDisabled = true;

document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("footer-test2");

  if (!window.smoothScrollDisabled) {
    setTimeout(function () {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1000);
  }
});

// document.addEventListener('DOMContentLoaded', function() {

//     const targetSection = document.getElementById('footer-test2');


//     setTimeout(function() {
      
//         targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 1000);
// });