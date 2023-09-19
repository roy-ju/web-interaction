let wrap;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let isMobile = false;
let isIos = false;

window.onload = function () {
  wrap = document.querySelector(".contentWrap");
  isMobile = mobileChk();

  const button = document.querySelectorAll("button")[0];

  button.addEventListener("click", () => {
    button.classList.add("dimd");
    wrap.classList.add("active");

    if (isMobile) {
      if (isIos) {
        DeviceOrientationEvent.requestAnimationFrame()
          .then(() => {
            window.addEventListener("deviceorientation", function (e) {
              x = e.gamma;
              y = e.beta;
            });
            loopMobile();
          })
          .catch(console.log(e));
      } else {
        window.addEventListener("deviceorientation", function (e) {
          x = e.gamma;
          y = e.beta;
        });
        loopMobile();
      }
    } else {
      window.addEventListener("mousemove", function (e) {
        x = e.clientX - window.innerWidth / 2;
        y = e.clientY - window.innerHeight / 2;
      });
      loop();
    }
  });
};

function loopMobile() {
  mx += (x - mx) * 0.1;
  my += (y - my) * 0.1;
  wrap.style.transform =
    "translate3d(-50%, -50%, 0) rotateX(" +
    (my - 50) +
    "deg) rotateY(" +
    mx +
    "deg)";

  window.requestAnimationFrame(loopMobile);
}

function loop() {
  mx += (x - mx) * 0.1;
  my += (y - my) * 0.1;

  wrap.style.transform =
    "translate3d(-50%, -50%, 0) rotateX(" +
    my / 10 +
    "deg) rotateY(" +
    -mx / 10 +
    "deg)";

  window.requestAnimationFrame(loop);
}

function mobileChk() {
  const mobileKeyWords = new Array(
    "Android",
    "iPhone",
    "iPad",
    "BlackBerry",
    "Windows CE",
    "SAMSUNG",
    "LG",
    "MOT",
    "SonyEricsson"
  );

  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      console.log(navigator.userAgent);
      return true;
    }
  }
  return false;
}

function iosChk() {
  const mobileKeyWords = new Array("iPhone", "iPad");
  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
}
