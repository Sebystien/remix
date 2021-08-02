/* 
Toggle for theme switcher
*/

const adjustElement = (colorChecker) => {
  document.querySelector(".sun").src = `./src/assets/sun-${colorChecker}.svg`;
  document.querySelector(".moon").src = `./src/assets/moon-${colorChecker}.svg`;

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
      document.querySelector(".white").style.color = "white";
    }
  } else {
    document.body.removeAttribute("data-color");
    adjustElement("white");
  }
});
