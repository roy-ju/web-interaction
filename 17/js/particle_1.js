window.onload = function () {
  const body = document.querySelector("body");
  const _btns = document.querySelectorAll(".buttonWrap button");
  const bgColorArr = ["#000000", "#ea204f", "#ffc83e"];
  const totalNum = 100;

  let windowWidth, windowHeight;
  let pageNum = 0;

  function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    motionSetting();
  }

  for (let i = 0; i < _btns.length; i++) {
    (function (idx) {
      _btns[idx].onclick = function () {
        pageNum = idx;
        motionSetting();
      };
    })(i);
  }

  TweenMax.from("h1", 1, {
    top: -50,
    autoAlpha: 0,
    ease: Power3.easeOut,
  });

  _btns.forEach(function (item, i) {
    TweenMax.from(item, 0.4, {
      top: 100,
      autoAlpha: 0,
      ease: Power3.easeInOut,
      delay: i * 0.1 + 1,
    });
  });

  let item;
  let section = document.querySelector("section");

  for (let i = 0; i < totalNum; i++) {
    item = document.createElement("div");

    if (item) {
      item.setAttribute("class", "textItem");
      item.style.top = window.innerHeight / 2 + "px";
      item.style.left = window.innerWidth / 2 + "px";
      item.innerHTML = `지홍 ${i}`;
      section.appendChild(item);
    }
  }

  let _textItem = document.querySelectorAll(".textItem");

  function motionSetting() {
    body.style.background = bgColorArr[pageNum];

    for (let i = 0; i < _btns.length; i++) {
      if (pageNum === i) {
        _btns[pageNum].classList.add("active");
      } else {
        _btns[i].classList.remove("active");
      }
    }

    TweenMax.killTweensOf(_textItem);

    if (pageNum === 0) {
      _textItem.forEach((item, _) => {
        TweenMax.to(item, 1, {
          top: Math.random() * (windowHeight - 150) + 60,
          left: Math.random() * (windowWidth - 80) + 20,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: "random(0.1, 1)",
          scale: 0.5,
          ease: Power4.easenOut,
          delay: "random(0, 0.5)",
        });
      });
    } else if (pageNum === 1) {
      _textItem.forEach((item, _) => {
        let scaleNum = Math.random() * 3;

        TweenMax.to(item, 1, {
          top: Math.random() * (windowHeight - 250) + 100,
          left: Math.random() * (windowWidth - 200) + 80,
          rotationX: "random(-60, 60)",
          rotationY: "random(-60, 60)",
          rotationZ: "random(-90, 90)",
          autoAlpha: scaleNum / 3,
          scale: scaleNum,

          ease: Power4.easeInOut,
          delay: "random(0, 0.5)",
        });
      });
    } else if (pageNum === 2) {
      _textItem.forEach((item, i) => {
        let scaleNum = Math.random() * 3;

        TweenMax.to(item, 1, {
          top: windowHeight / 2 + Math.sin(i / 3) * 60,
          left: i * 20,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: 1,
          scale: scaleNum / 3,
          ease: Power4.easeInOut,
          delay: i * 0.02,
        });
      });
    }
  }

  window.addEventListener("resize", () => {
    resize();
  });

  resize();
};
