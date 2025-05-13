//tab js

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

//slider js

if (document.querySelector(".testimonial-slider")) {
  var testimonialSlider = new Splide(".splide", {
    arrows: false,
    pagination: false,
    perPage: "3",
    gap: "60px",
    breakpoints: {
      1024: {
        perPage: 2,
        gap: "40px",
      },
      576: {
        perPage: 1,
      },
    },
  });
  testimonialSlider.mount();
}
