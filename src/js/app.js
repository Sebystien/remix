"use strict";

/* 
navigation menu
*/
const nav = document.querySelector(".nav__navigation");
const burger = document.querySelector(".nav__burger");
const burgerIcon = document.querySelector(".nav__icon");

burger.addEventListener("click", (e) => {
  burgerIcon.classList.contains("clicked")
    ? burgerIcon.classList.remove("clicked")
    : burgerIcon.classList.add("clicked");

  nav.classList.toggle("nav__active");

  console.log("testing");
});

window.addEventListener("resize", (e) => {
  e.preventDefault();

  if (window.innerWidth >= 1200) {
    burgerIcon.classList.remove("clicked");
    nav.classList.remove("nav__active");
  }

  console.log("it works");
});

/* 
Toggle for theme switcher
*/

const adjustElement = (colorChecker) => {
  document.querySelector(".logo").src = `./src/assets/logo-${colorChecker}.svg`;
  document.querySelector(".hero").src = `./src/assets/hero-${colorChecker}.svg`;
};

const toggle = document.querySelector(".toggle__input");

toggle.addEventListener("change", (e) => {
  e.preventDefault();
  if (e.target.checked) {
    document.body.setAttribute("data-color", "dark");
    if (document.body.getAttribute("data-color") === "dark") {
      adjustElement("black");
    }
  } else {
    document.body.removeAttribute("data-color");
    adjustElement("white");
  }
});

//Create a function that checks wether the attribute data ius dark, and uodate the value
/*
1- check if the datatheme is a certain color and update it 
 */

/* 
Other function naluty
*/

const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__links")) {
    const links = e.target.getAttribute("href");
    document.querySelector(links).scrollIntoView({ behavior: "smooth" });

    console.log(links);
  }
});

/*********************
 *
 * MODAL INTERACTION
 *
 *********************/

const modal = document.querySelector(".modal");

modal.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hey");
});

/*
 *
 *
 *   Small blog menu
 *
 *
 */
