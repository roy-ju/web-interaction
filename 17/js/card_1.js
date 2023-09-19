let windowWidth, windowHeight;

window.onload = function () {
  const _cards = document.querySelectorAll("section .cardItem");
  const _randomBtn = document.querySelectorAll(".buttonWrap button")[0];
  const _resetBtn = document.querySelectorAll(".buttonWrap button")[1];

  function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    cardsReset();
  }

  function cardsRandom() {
    _cards.forEach((item, i) => {
      cardAnimation("random", item, i);
    });
  }

  function cardsReset() {
    _cards.forEach((item, i) => {
      cardAnimation("reset", item, i);
    });
  }

  function cardAnimation(type, item, i) {
    if (type == "reset") {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 40,
        left: windowWidth / 2 + (i * 40 - 190),
        rotation: 0,
        ease: Power3.easeInOut,
        delay: i * 0.2,
      });
    } else if (type == "random") {
      TweenMax.to(item, 1, {
        top: Math.random() * windowHeight,
        left: Math.random() * windowWidth,
        rotation: Math.random() * 180,
        ease: Power4.easeInOut,
        delay: i * 0.1,
      });
    }
  }

  window.addEventListener("resize", () => {
    resize();
    cardsReset();
  });

  _resetBtn.addEventListener("click", () => {
    cardsReset();
  });

  _randomBtn.addEventListener("click", () => {
    cardsRandom();
  });

  resize();
};
