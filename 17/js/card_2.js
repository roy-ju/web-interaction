let windowWidth, windowHeight;

window.onload = function () {
  let pageNum = 0;

  const _cards = document.querySelectorAll("section .cardItem");
  const _btns = document.querySelectorAll(".buttonWrap button");

  for (let i = 0; i < _btns.length; i++) {
    (function (idx) {
      _btns[idx].onclick = function () {
        pageNum = idx;
        cardSetting();
      };
    })(i);
  }

  TweenMax.from("h1", 1, {
    top: -50,
    autoAlpha: 0,
    ease: Power3.easeOut,
  });

  _btns.forEach((ele, idx) => {
    TweenMax.from(ele, 0.4, {
      top: 100,
      autoAlpha: 0,
      ease: Power3.easeInOut,
      delay: idx * 0.1 + 1,
    });
  });

  TweenMax.set("section", { perspetive: 400 });

  function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    cardsReset();
  }

  function cardSetting() {
    for (let i = 0; i < _btns.length; i++) {
      _btns[i].classList.remove("active");
    }

    _btns[pageNum].classList.add("active");

    if (pageNum === 0) {
      cardsReset();
    } else if (pageNum === 1) {
      cardsRandomOne();
    } else if (pageNum === 2) {
      cardsRandomTwo();
    } else {
      cardsRandomThree();
    }
  }

  function cardsReset() {
    _cards.forEach((item, i) => {
      cardAnimation("reset", item, i);
    });
  }

  function cardsRandomOne() {
    _cards.forEach((item, i) => {
      cardAnimation("randomOne", item, i);
    });
  }

  function cardsRandomTwo() {
    _cards.forEach((item, i) => {
      cardAnimation("randomTwo", item, i);
    });
  }

  function cardsRandomThree() {
    _cards.forEach((item, i) => {
      cardAnimation("randomThree", item, i);
    });
  }

  function cardAnimation(type, item, i) {
    if (type == "reset") {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 50,
        left: windowWidth / 2 + (i * 60 - 200),
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        ease: Power4.easeInOut,
        delay: i * 0.15,
      });
    } else if (type == "randomOne") {
      TweenMax.to(item, 1, {
        top: Math.random() * (windowHeight - 300) + 100,
        left: Math.random() * (windowWidth - 300) + 100,
        rotationX: "random(-60, 60)",
        rotationY: "random(-60, 60)",
        rotationZ: "random(-90, 90)",
        scale: Math.random() * 0.6 + 0.6,
        ease: Power4.easeInOut,
        delay: "random(0, 0.5)",
      });
    } else if (type == "randomTwo") {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 + i * 30 - 100,
        left: windowWidth / 2 - i * 80,
        rotationX: 0,
        rotationY: -10 * i,
        rotationZ: 20 * i,
        scale: Math.random() * 0.6 + 0.6,
        ease: Power4.easeInOut,
        delay: i * 0.15,
      });
    } else if (type == "randomThree") {
      TweenMax.to(item, 1, {
        top: 0,
        left: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: Math.random() * 0.6 + 0.6,
        ease: Power4.easeInOut,
        delay: i * 0.15,
      });
    }
  }

  window.addEventListener("resize", () => {
    resize();
  });

  resize();
};
