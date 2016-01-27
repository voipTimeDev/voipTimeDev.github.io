{
  let navbarFixed = document.getElementById('navbar-fixed');


  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 53) {
      navbarFixed.classList.add('navbar-fixed_visible');
    } else if (scrolled <= 53) {
      navbarFixed.classList.remove('navbar-fixed_visible');
    }
  }
}