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
  var rocketContainer = document.getElementById('rocket-container');

  var lastScrollTop = 0;
  var firstScrollTop = 0;
  var secondScrollTop = 0;
  var batteryActive = true;

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
      if (batteryActive) {
        batteryAnimation();
        firstScrollTop = scrolled;
        batteryActive = false;
      } else if (firstScrollTop <= scrolled && firstScrollTop) {
        arrowAnimation();
        setTimeout(function () {
          return incrementCounterFontSize();
        }, 500);
        firstScrollTop = 0;
        secondScrollTop = scrolled;
      } else if (secondScrollTop <= scrolled && secondScrollTop) {
        counterAnimation();
        setTimeout(function () {
          return paragraphAnimation();
        }, 500);
        batteryTrue = false;
      }
    }
    if (scrolled >= 53) {
      navbarFixed.classList.add('navbar-fixed_visible');
    } else if (scrolled <= 53) {
      navbarFixed.classList.remove('navbar-fixed_visible');
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      rocket.classList.add('rocket_animation');
    }

    lastScrollTop = scrolled;
  };

  function rocketStagger() {
    rocket.style.transition = 'all .2s';
    rocketContainer.style.transform = 'rotateX(20deg)';
    setTimeout(function () {
      rocketContainer.style.transform = 'rotateX(-10deg)';
    }, 500);
    setTimeout(function () {
      rocketContainer.style.transform = 'rotateX(10deg)';
    }, 1000);
    setTimeout(function () {
      rocketContainer.style.transform = 'rotateX(-5deg)';
    }, 1500);
    setTimeout(function () {
      rocketContainer.style.transform = 'rotateX(0deg)';
    }, 2000);
  }

  function counterAnimation() {
    var interval = setInterval(function () {
      var counterVal = parseInt(counterLeft.textContent);
      if (counterVal === 30) {
        clearInterval(interval);
      } else {
        counterLeft.textContent = ++counterVal + '%';
      }
    }, 2000 / 60);
    var intervalSecond = setInterval(function () {
      var counterVal = parseInt(counterRight.textContent);
      if (counterVal === 70) {
        clearInterval(intervalSecond);
      } else {
        counterRight.textContent = ++counterVal + '%';
      }
    }, 1000 / 60);
  }

  function paragraphAnimation() {
    paragraph.classList.add('increase-the-speed__paragraph-animation');
  }

  function batteryAnimation() {
    console.log(batteryRect1.classList);
    batteryRect1.style.fill = "rgb(112, 193, 249)";
    setTimeout(function () {
      batteryRect2.style.fill = "rgb(112, 193, 249)";
    }, 150);
    setTimeout(function () {
      batteryRect3.style.fill = "rgb(112, 193, 249)";
    }, 300);
    setTimeout(function () {
      batteryRect4.style.fill = "rgb(112, 193, 249)";
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