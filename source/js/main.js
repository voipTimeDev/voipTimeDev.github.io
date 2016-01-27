{
  let navbarFixed = document.getElementById('navbar-fixed');
  let rocket = document.getElementById('rocket');
  let getStartedBtn = document.getElementById('get-started');
  let stopAnim = false;


  getStartedBtn.onmouseover = function() {
    rocketStagger();
  }

  getStartedBtn.onmouseleave = function() {
    stopAnim = true;
  }

  window.onscroll = function scrollEvent() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

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
      rocket.style.transition = 'all .4s';
      rocket.style.top = '5px';
      rocket.style.right = '30px';
    }, 200);
    setTimeout(function() {
      rocket.style.transition = 'all .2s';
      rocket.style.top = '0px';
      rocket.style.right = '40px';
    }, 600);



  }
}