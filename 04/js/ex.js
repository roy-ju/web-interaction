const depthWrap = document.querySelector(".depthWrap");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = "0";

const percent = (n, totalN) => {
  return ((n / totalN) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  height = window.innerHeight;

  documentHeight = document.body.scrollHeight - window.innerHeight;

  per = percent(scrollNum, documentHeight);

  depthWrap.querySelector("span").innerText = `${scrollNum.toFixed(0)}`;

  progressBar.style.width = per + "%";

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;

  //   depthWrap.innerText = `scrollY: ${scrollNum}px, scrollY + innHeight: ${
  //     scrollNum + height
  //   }px`;

  // 이렇게 되면 100%를 만들 수 없음

  //   depthWrap.innerText = `scrollY: ${(scrollNum / document.body.scrollHeight) * 100} %`;
});
