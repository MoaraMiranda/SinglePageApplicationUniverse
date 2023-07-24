export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
    this.selectMenu();
  }

  selectMenu() {
    const { pathname } = window.location;
    document
      .querySelectorAll("nav a")
      .forEach((item) => item.classList.remove("active"));
    document.querySelector(`[href="${pathname}"]`).classList.add("active");
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
