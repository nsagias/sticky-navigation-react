const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
  // nav offsetheight is on the nav tag
  console.log(window.scrollY, nav.offsetHeight)
}