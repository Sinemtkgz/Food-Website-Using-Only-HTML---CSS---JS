document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  sr.reveal(".main-img", { origin: "right" });
  sr.reveal(".content", { origin: "left" });
});
