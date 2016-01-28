'use strict';

window.onload = function () {

  var navbarFixed = document.getElementById('navbar-fixed');
  var rocket = document.getElementById('rocket');
  var getStartedBtn = document.getElementById('get-started');
  var stopAnim = false;
  var battery = document.getElementById('battery');
  var batteryTrue = true;
  var incrSpeedToTop = document.getElementById('increase-the-speed').offsetTop - 333;
  var paragraph = document.getElementById('increase-the-speed__paragraph');

  var batteryRect1 = battery.contentDocument.getElementById("first");
  var batteryRect2 = battery.contentDocument.getElementById("second");
  var batteryRect3 = battery.contentDocument.getElementById("third");
  var batteryRect4 = battery.contentDocument.getElementById("fourth");

  var counterLeft = document.getElementById('counter-left');
  var counterRight = document.getElementById('counter-right');

  var arrowLeft = document.getElementById('arrow-left');
  var arrowRight = document.getElementById('arrow-right');

  getStartedBtn.onmouseover = function () {
    rocketStagger();
  };

  getStartedBtn.onmouseleave = function () {
    stopAnim = true;
  };

  window.onscroll = function scrollEvent() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= incrSpeedToTop && batteryTrue) {
      batteryAnimation();
      setTimeout(function () {
        return arrowAnimation();
      }, 1000);
      setTimeout(function () {
        return incrementCounterFontSize();
      }, 1500);
      setTimeout(function () {
        return counterAnimation();
      }, 2000);
      setTimeout(function () {
        return paragraphAnimation();
      }, 3500);

      batteryTrue = false;
    }
    if (scrolled >= 53) {
      navbarFixed.classList.add('navbar-fixed_visible');
    } else if (scrolled <= 53) {
      navbarFixed.classList.remove('navbar-fixed_visible');
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      rocket.classList.add('rocket_animation');
    }
  };

  function rocketStagger() {
    rocket.style.transition = 'all .2s';
    rocket.style.top = '-5px';
    rocket.style.right = '50px';
    setTimeout(function () {
      rocket.style.transition = 'all .3s';
      rocket.style.top = '5px';
      rocket.style.right = '30px';
    }, 200);
    setTimeout(function () {
      rocket.style.top = '-5px';
      rocket.style.right = '50px';
    }, 500);
    setTimeout(function () {
      rocket.style.top = '5px';
      rocket.style.right = '30px';
    }, 700);
    setTimeout(function () {
      rocket.style.transition = 'all .2s';
      rocket.style.top = '0px';
      rocket.style.right = '40px';
    }, 1000);
  }

  function counterAnimation() {
    var interval = setInterval(function () {
      var counterVal = parseInt(counterLeft.innerText);
      if (counterVal === 30) {
        clearInterval(interval);
      } else {
        counterLeft.innerText = ++counterVal + '%';
      }
    }, 2000 / 60);
    var intervalSecond = setInterval(function () {
      var counterVal = parseInt(counterRight.innerText);
      if (counterVal === 70) {
        clearInterval(intervalSecond);
      } else {
        counterRight.innerText = ++counterVal + '%';
      }
    }, 1000 / 60);
  }

  function paragraphAnimation() {
    paragraph.classList.add('increase-the-speed__paragraph-animation');
  }

  function batteryAnimation() {
    batteryRect1.style.opacity = '1';
    setTimeout(function () {
      batteryRect2.style.opacity = '1';
    }, 150);
    setTimeout(function () {
      batteryRect3.style.opacity = '1';
    }, 300);
    setTimeout(function () {
      batteryRect4.style.opacity = '1';
    }, 450);
  }

  function incrementCounterFontSize() {
    counterLeft.classList.add('counter-animation-left');
    counterRight.classList.add('counter-animation-right');
  }

  function arrowAnimation() {
    arrowRight.classList.add('arrow-right-height');
    arrowLeft.classList.add('arrow-left-height');
    setTimeout(function () {
      arrowLeft.classList.add('arrow-left-width');
      arrowRight.classList.add('arrow-right-width');
    }, 500);
  }
};