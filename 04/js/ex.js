const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

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

  per = percent(scrollNum, documentHeight) + "%";

  h1.innerText = `${scrollNum}m`;

  progressBar.style.width = per;

  //   h1.innerText = `scrollY: ${scrollNum}px, scrollY + innHeight: ${
  //     scrollNum + height
  //   }px`;

  // 이렇게 되면 100%를 만들 수 없음

  //   h1.innerText = `scrollY: ${(scrollNum / document.body.scrollHeight) * 100} %`;
});
