function showSection(imgElement, id) {
  const sections = document.querySelectorAll(".testimonial-dec");
  sections.forEach((sec) => sec.classList.remove("active-tab"));
  document.getElementById(id).classList.add("active-tab");
  const allImgs = document.querySelectorAll(".testimonial-img");
  allImgs.forEach((img) => {
    img.classList.remove("active", "inactive");
  });
  imgElement.classList.add("active");
}

if (document.querySelector(".testimonial-slider")) {
  var testimonialSlider = new Splide(".splide", {
    arrows: false,
    pagination: false,
    perPage: "4",
    gap: "60px",
    type: "loop",
    drag: "free",
  });
  testimonialSlider.mount();
}
