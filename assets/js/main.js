/*!
  Main JavaScript file for charlielee.uk
  Copyright 2017 Charlie Lee
  License: GPL-3.0
  https://github.com/charlielee/charlielee.github.io
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

