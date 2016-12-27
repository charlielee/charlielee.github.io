/*!
  JavaScript used on the entire website.
*/

var mobileToggle = document.getElementById("mobile-menu-toggle"),
    menuList     = document.getElementById("menu-list");

mobileToggle.addEventListener("click", toggleMenu);
window.addEventListener("load", toggleMenu);

/**
 * Toggles the display of the navigation menu in mobile view
 */
function toggleMenu() {
  menuList.classList.toggle("hidden");
}

