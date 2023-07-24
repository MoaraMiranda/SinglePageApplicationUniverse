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
  backgrounds.style.background = "url('/assets/mountains-universe-1.png')";
});

universeLink.addEventListener("click", function (event) {
  backgrounds.style.background = "url('/assets/mountains-universe-2.png')";
});

exploreLink.addEventListener("click", function (event) {
  backgrounds.style.background = "url('/assets/mountains-universe-3.png')";
});
