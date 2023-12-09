document.addEventListener("DOMContentLoaded", function () {
    const targetSection = document.getElementById("geradorbotao");

    document.body.style.scrollBehavior = "smooth";
    document.body.style.scrollSnapType = "mandatory";
    document.body.style.scrollSnapPointsY = "repeat(100%)";

    setTimeout(function () {
      targetSection.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
        duration: 2000,
      });
    }, 1000);
  });