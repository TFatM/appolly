var menu = document.getElementById("menu");
var menuItem = document.querySelectorAll("#menuItem");
var openMenuBtn = document.getElementById("burger-menu");
var closeMenuBtn = document.getElementById("close-menu");

function showMenu() {
    menu.classList.add("showMenu");
    console.log("clicked");
}

function closeMenu() {
    menu.classList.remove("showMenu");
    console.log("clicked");
}

menuItem.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", closeMenu);
  }
)

openMenuBtn.addEventListener("click", showMenu);
closeMenuBtn.addEventListener("click", closeMenu);