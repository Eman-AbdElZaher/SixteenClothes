// make navbar fixed
// Get the navbar
var navbar = document.getElementById("navbar"),
    navItem = document.querySelectorAll(".nav-item"),
    activeclass = document.querySelectorAll('.filter-group li');

// Get the offset position of the navbar
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function() {
        navbar.classList.toggle("fixed",window.scrollY >= 0)
}
// add active class to nav item 
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', activateClass);
   }
// add active class to filter-group li
   for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].addEventListener('click', activateClass);
   }
function activateClass(e) {
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
    }
    e.target.classList.add('active');
}
// Configure your options
const options = {
    animationDuration: 0.5,
    gutterPixels: 25,
};

// Adjust the CSS selector to match the container where
// you set up your image gallery
const filterizr = new Filterizr('.filter-container', options);