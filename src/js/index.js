import "../style/index.scss";
// import img from "../images/test.jpg";
// console.log("hello from js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Your document is ready!");

  // Create Slider
  let slideIndex = 1;
  function createSlider(n) {
    console.log("createSlider");
    let i;
    let slides = document.getElementsByClassName("slider__slide");
    n > slides.length ? (slideIndex = 1) : "";
    n < 1 ? (slideIndex = slides.length) : "";
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
  }
  createSlider(slideIndex);

  // Update Shown Slide
  let updateShownSlide = n => {
    createSlider((slideIndex += n));
    console.log("updateShownSlide");
  };

  //   Auto Change Slides
  let autoChangeSlides = () => {
    updateShownSlide(1);
    setTimeout(autoChangeSlides, 7000);
  };
  autoChangeSlides();
  setTimeout(autoChangeSlides, 7000);

  // on click on next and prev buttons
  document.getElementById("prev").addEventListener("click", () => {
    updateShownSlide(-1);
    console.log("prev clicked");
  });
  document.getElementById("next").addEventListener("click", () => {
    updateShownSlide(1);
    console.log("next clicked");
  });
  // mobile menu
  document.getElementById("MobileMenuBtn").addEventListener("click", () => {
    console.log("MobileMenuBtn clicked");
    let menu = document.getElementById("mainMenuItemsContainer");

    if (menu.classList.contains("opened")) {
      menu.classList.remove("opened");
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
      menu.classList.add("opened");
    }
  });
});
