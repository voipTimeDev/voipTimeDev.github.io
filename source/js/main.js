window.onload = function() {

  let navbarFixed = document.getElementById('navbar-fixed');
  let rocket = document.getElementById('rocket');
  let getStartedBtn = document.getElementById('get-started');
  let stopAnim = false;
  let battery = document.getElementById('battery');
  let batteryTrue = true;
  let incrSpeedToTop = document.getElementById('increase-the-speed').offsetTop - 433;
  let paragraph = document.getElementById('increase-the-speed__paragraph');
  let rocketContainer = document.getElementById('rocket-container');

  let lastScrollTop = 0;
  let firstScrollTop = 0;

  let batteryActive = true;

  let scrollHeightKnown = false;

  let batteryRect1 = battery.contentDocument.getElementById("first");
  let batteryRect2 = battery.contentDocument.getElementById("second");
  let batteryRect3 = battery.contentDocument.getElementById("third");
  let batteryRect4 = battery.contentDocument.getElementById("fourth");

  let counterLeft = document.getElementById('counter-left');
  let counterRight = document.getElementById('counter-right');

  let arrowLeft = document.getElementById('arrow-left');
  let arrowRight = document.getElementById('arrow-right');

  getStartedBtn.onmouseover = function() {
    //rocketStagger();
  }


  getStartedBtn.onmouseleave = function() {
    stopAnim = true;
  }


  window.onscroll = function scrollEvent() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
/*    if( scrolled >= incrSpeedToTop && batteryTrue) {
      if (batteryActive) {
        batteryAnimation();
        firstScrollTop = scrolled;
        batteryActive = false;
      } else if (firstScrollTop <= scrolled && firstScrollTop) {
        arrowAnimation();
        setTimeout(() => incrementCounterFontSize(), 500);
        firstScrollTop = 0;
        secondScrollTop = scrolled;
      } else if (secondScrollTop <= scrolled && secondScrollTop) {
        counterAnimation();
        setTimeout(() => paragraphAnimation(), 500);
        batteryTrue = false;
      }
    }*/

    if(scrolled >= 1100) {
      batteryRect1.style.fill = "rgb(112, 193, 249)";
    }
    if(scrolled >= 1154) {
      batteryRect2.style.fill = "rgb(112, 193, 249)";
    }
    if(scrolled >= 1210) {
      batteryRect3.style.fill = "rgb(112, 193, 249)";
    }
    if(scrolled >= 1264) {
      batteryRect4.style.fill = "rgb(112, 193, 249)";
    }
    if(scrolled >= 1320) {
      arrowAnimation();
      setTimeout(() => incrementCounterFontSize(), 500);
    }
    if(scrolled >= 1374) {
      counterAnimation();
      setTimeout(() => paragraphAnimation(), 500);
    }

    if (scrolled >= 53) {
      navbarFixed.classList.add('navbar-fixed_visible');
    } else if (scrolled <= 53) {
      navbarFixed.classList.remove('navbar-fixed_visible');
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight -300) {
      rocket.classList.add('rocket_animation');
    }

    lastScrollTop = scrolled;
  }


  function rocketStagger() {
    rocket.style.transition = 'all .2s';
    rocketContainer.style.transform = '10px';
    setTimeout(function() {
      rocketContainer.style.marginTop = '-10px';
    }, 500)
    setTimeout(function() {
      rocketContainer.style.marginTop = '0px)';
    }, 1000);
    setTimeout(function() {
      rocketContainer.style.transform = 'rotateX(-5deg)';
    }, 1500);
    setTimeout(function() {
      rocketContainer.style.transform = 'rotateX(0deg)';
    }, 2000);
  }

  function counterAnimation() {
    const interval = setInterval(function() {
      let counterVal = parseInt(counterLeft.textContent);
      if (counterVal  === 30) {
        clearInterval(interval);
      } else {
        counterLeft.textContent = `${ ++counterVal }%`;
      }
    } ,2000/60);
    const intervalSecond = setInterval(function() {
      let counterVal = parseInt(counterRight.textContent);
      if (counterVal  === 70) {
        clearInterval(intervalSecond);
      } else {
        counterRight.textContent = `${ ++counterVal }%`;
      }
    } ,1000/60);
  }

  function paragraphAnimation() {
    paragraph.classList.add('increase-the-speed__paragraph-animation');
  }

  function batteryAnimation() {
    //batteryRect1.style.fill = "rgb(112, 193, 249)";
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
    setTimeout(() => {
      arrowLeft.classList.add('arrow-left-width');
      arrowRight.classList.add('arrow-right-width');
    }, 500);
  }
}