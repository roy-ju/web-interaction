const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const contWrap = document.querySelector(".contWrap");
const dimd = document.querySelector(".dimd");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contWrap.style.marginTop = coverHeight + "px";

const percent = (n, totalN) => {
  return ((n / totalN) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  //scrollHeight가 마진을 못가져옴
  docHeight = document.body.scrollHeight + coverHeight - window.innerHeight;

  per = percent(scrollNum, docHeight);
  progressBar.style.width = per + "%";

  if (scrollNum > coverHeight) {
    header.classList.add("fixed");
  } else {
    //화면에서 헤더 영역이 보일때
    header.classList.remove("fixed");

    coverTitle.style.top = -scrollNum / 10 + "px";

    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;

    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
