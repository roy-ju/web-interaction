let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;
let speed = 0.1;

const contentImgAll = document.querySelectorAll(".contWrap img");

const shadow = contentImgAll?.[0] ? contentImgAll[0] : null;
const date = contentImgAll?.[1] ? contentImgAll[1] : null;
const human = contentImgAll?.[2] ? contentImgAll[2] : null;
const textImg = contentImgAll?.[3] ? contentImgAll[3] : null;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  y = e.pageY - window.innerHeight / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (x - targetY) * speed;

  if (shadow) {
    // shadow.style.transform = `translateX(${targetX / 35}px)`;
    shadow.style.transform = `rotateY(${targetX / 6}deg)`;
  }

  if (human) {
    // human.style.transform = `translateX(${-targetX / 20}px)`;
    human.style.transform = `rotateY(${targetX / 6}deg)`;
  }

  if (date) {
    date.style.transform = `translate(${targetX / 20}px, ${targetY / 20}px)`;
  }

  if (textImg) {
    textImg.style.transform = `translate(${-targetX / 10}px, ${
      -targetY / 10
    }px)`;
  }

  window.requestAnimationFrame(loop);
};

loop();
