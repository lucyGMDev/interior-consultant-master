const menuButton = document.querySelector(".header__menu-button");
const closeMenuButton = document.querySelector(".header__close-menu-button");

const headerNav = document.querySelector(".header-nav");
const pageName = document.querySelector(".page-name");
const pageContent = document.querySelector(".page-content");
menuButton.addEventListener("click", () => {
  headerNav.classList.toggle("mobile-hidden");
  pageName.classList.toggle("hidden");
  menuButton.classList.toggle("hidden");
  pageContent.classList.toggle("hidden");
  closeMenuButton.classList.toggle("hidden");
});

closeMenuButton.addEventListener("click", () => {
  headerNav.classList.toggle("mobile-hidden");
  pageName.classList.toggle("hidden");
  menuButton.classList.toggle("hidden");
  pageContent.classList.toggle("hidden");
  closeMenuButton.classList.toggle("hidden");
})
