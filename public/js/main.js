'use strict';

{
  (function () {
    var rocketStagger = function rocketStagger() {
      rocket.style.transition = 'all .2s';
      rocket.style.top = '-5px';
      rocket.style.right = '50px';
      setTimeout(function () {
        rocket.style.transition = 'all .4s';
        rocket.style.top = '5px';
        rocket.style.right = '30px';
      }, 200);
      setTimeout(function () {
        rocket.style.transition = 'all .2s';
        rocket.style.top = '0px';
        rocket.style.right = '40px';
      }, 600);
    };

    var navbarFixed = document.getElementById('navbar-fixed');
    var rocket = document.getElementById('rocket');
    var getStartedBtn = document.getElementById('get-started');
    var stopAnim = false;

    getStartedBtn.onmouseover = function () {
      rocketStagger();
    };

    getStartedBtn.onmouseleave = function () {
      stopAnim = true;
    };

    window.onscroll = function scrollEvent() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolled >= 53) {
        navbarFixed.classList.add('navbar-fixed_visible');
      } else if (scrolled <= 53) {
        navbarFixed.classList.remove('navbar-fixed_visible');
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        rocket.classList.add('rocket_animation');
      }
    };
  })();
}