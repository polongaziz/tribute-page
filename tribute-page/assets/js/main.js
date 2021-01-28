function navToggle(menu, toggle) {
  const navMenu = document.getElementById(menu),
    navToggle = document.getElementById(toggle);

  if (navMenu && navToggle) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("show");
      navMenu.classList.toggle("show");
    });
  }
}

navToggle("nav-menu", "nav-toggle");

function removeList(navItem, navMenu, toggle) {
  const item = document.querySelectorAll(navItem),
    menu = document.querySelector(navMenu),
    navToggle = document.getElementById(toggle);

  item.forEach((i) => {
    i.addEventListener("click", function () {
      menu.classList.remove("show");
      navToggle.classList.remove("show");
    });
  });
}

removeList(".nav__item", ".nav__menu", "nav-toggle");

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
