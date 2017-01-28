/*!
  Main JavaScript file for charlie-lee-theme.
*/

var mobileToggle = document.getElementById("mobile-menu-toggle"),
    menuList     = document.getElementById("menu-list");

mobileToggle.addEventListener("click", toggleMenu);

/**
 * Toggles the display of the navigation menu in mobile view
 */
function toggleMenu() {
  menuList.classList.toggle("visible");
}

