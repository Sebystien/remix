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
