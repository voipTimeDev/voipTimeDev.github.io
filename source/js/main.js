window.onload = function() {

  let navbarFixed = document.getElementById('navbar-fixed');
  let rocket = document.getElementById('rocket');
  let getStartedBtn = document.getElementById('get-started');
  let stopAnim = false;
  let battery = document.getElementById('battery');
  let batteryTrue = true;
  let incrSpeedToTop = document.getElementById('increase-the-speed').offsetTop - 333;
  let paragraph = document.getElementById('increase-the-speed__paragraph');

  let batteryRect1 = battery.contentDocument.getElementById("first");
  let batteryRect2 = battery.contentDocument.getElementById("second");
  let batteryRect3 = battery.contentDocument.getElementById("third");
  let batteryRect4 = battery.contentDocument.getElementById("fourth");

  let counterLeft = document.getElementById('counter-left');
  let counterRight = document.getElementById('counter-right');

  let arrowLeft = document.getElementById('arrow-left');
  let arrowRight = document.getElementById('arrow-right');

  getStartedBtn.onmouseover = function() {
    rocketStagger();
  }


  getStartedBtn.onmouseleave = function() {
    stopAnim = true;
  }


  window.onscroll = function scrollEvent() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if( scrolled >= incrSpeedToTop && batteryTrue) {
      batteryAnimation();
      setTimeout(() =>  arrowAnimation(),1000);
      setTimeout(() => incrementCounterFontSize(),1500);
      setTimeout(() => counterAnimation(), 2000);
      setTimeout(() => paragraphAnimation(), 3500);

      batteryTrue = false;
    }
    if (scrolled >= 53) {
      navbarFixed.classList.add('navbar-fixed_visible');
    } else if (scrolled <= 53) {
      navbarFixed.classList.remove('navbar-fixed_visible');
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      rocket.classList.add('rocket_animation');
    }
  }


  function rocketStagger() {
    rocket.style.transition = 'all .2s';
    rocket.style.top = '-5px';
    rocket.style.right = '50px';
    setTimeout(function() {
      rocket.style.transition = 'all .3s';
      rocket.style.top = '5px';
      rocket.style.right = '30px';
    }, 200);
    setTimeout(function() {
      rocket.style.top = '-5px';
      rocket.style.right = '50px';
    }, 500);
    setTimeout(function() {
      rocket.style.top = '5px';
      rocket.style.right = '30px';
    }, 700);
    setTimeout(function() {
      rocket.style.transition = 'all .2s';
      rocket.style.top = '0px';
      rocket.style.right = '40px';
    }, 1000);
  }

  function counterAnimation() {
    const interval = setInterval(function() {
      let counterVal = parseInt(counterLeft.innerText);
      if (counterVal  === 30) {
        clearInterval(interval);
      } else {
        counterLeft.innerText = `${ ++counterVal }%`;
      }
    } ,2000/60);
    const intervalSecond = setInterval(function() {
      let counterVal = parseInt(counterRight.innerText);
      if (counterVal  === 70) {
        clearInterval(intervalSecond);
      } else {
        counterRight.innerText = `${ ++counterVal }%`;
      }
    } ,1000/60);
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
    setTimeout(() => {
      arrowLeft.classList.add('arrow-left-width');
      arrowRight.classList.add('arrow-right-width');
    }, 500);
  }
}