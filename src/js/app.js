"use strict";

/* 
navigation menu
*/

const burger = document.querySelector(".nav__burger");
const burgerIcon = document.querySelector(".nav__icon");

burger.addEventListener("click", (e) => {
  burgerIcon.classList.contains("clicked")
    ? burgerIcon.classList.remove("clicked")
    : burgerIcon.classList.add("clicked");
  console.log("testing");
});

window.addEventListener("resize", (e) => {
  e.preventDefault();

  if (window.innerWidth >= 768) {
    burgerIcon.classList.remove("clicked");
  }

  console.log("it works");
});
