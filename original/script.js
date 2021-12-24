const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
  // nav offsetheight is on the nav tag
  // console.log(window.scrollY, nav.offsetHeight)
  if(window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}