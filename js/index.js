import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explore", "/pages/explore.html");
router.add("404", "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const homeLink = document.querySelector("#home");
const universeLink = document.querySelector("#universe");
const exploreLink = document.querySelector("#explore");
const backgrounds = document.querySelector("#background-changes");

homeLink.addEventListener("click", function (event) {
  event.preventDefault();

  homeLink.classList.add("active");
  universeLink.classList.remove("active");
  exploreLink.classList.remove("active");

  backgrounds.classList.add(".home-background");
  backgrounds.classList.remove(".universe-background");
  backgrounds.classList.remove(".explore-background");
});

universeLink.addEventListener("click", function (event) {
  event.preventDefault();
  homeLink.classList.remove("active");
  universeLink.classList.add("active");
  exploreLink.classList.remove("active");

  backgrounds.classList.remove(".home-background");
  backgrounds.classList.add(".universe-background");
  backgrounds.classList.remove(".explore-background");
});

exploreLink.addEventListener("click", function (event) {
  event.preventDefault();
  homeLink.classList.remove("active");
  universeLink.classList.remove("active");
  exploreLink.classList.add("active");
  
  backgrounds.classList.remove(".home-background");
  backgrounds.classList.remove(".universe-background");
  backgrounds.classList.add(".explore-background");
});
console.log(backgrounds);
