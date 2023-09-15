let prev_button, next_button;
let contentWrap;
let disk_inner;
let pageNum = 0;
let totalNum = 0;
let album;
let pointBtnAll;
let bgArray = new Array();
bgArray[0] = ["#0272a4", "#f6a564"];
bgArray[1] = ["#b6bfc8", "#36595b"];
bgArray[2] = ["#e58e82", "#6f569f"];

window.onload = function () {
  prev_button = document.querySelectorAll("button")[0];
  next_button = document.querySelectorAll("button")[1];

  contentWrap = document.querySelector(".contentWrap");
  disk_inner = document.querySelectorAll(".disk_inner");
  album = document.querySelectorAll(".album");
  pointBtnAll = document.querySelectorAll(".pointWrap li");
  totalNum = album.length;

  prev_button.addEventListener("click", function () {
    if (pageNum > 0) {
      pageNum--;
    } else {
      pageNum = totalNum - 1;
    }
    pageChangeFunc();
  });

  next_button.addEventListener("click", function () {
    if (pageNum < totalNum - 1) {
      pageNum++;
    } else {
      pageNum = 0;
    }
    pageChangeFunc();
  });

  for (let i = 0; i < pointBtnAll.length; i++) {
    (function (idx) {
      pointBtnAll[idx].onclick = function () {
        pageNum = idx;
        pageChangeFunc();
      };
    })(i);
  }

  pageChangeFunc();
};

function pageChangeFunc() {
  contentWrap.style.background =
    "linear-gradient(120deg," +
    bgArray[pageNum][0] +
    ", " +
    bgArray[pageNum][1] +
    ")";

  for (let i = 0; i < totalNum; i++) {
    if (pageNum == i) {
      album[i].classList.add("active");
      pointBtnAll[i].classList.add("active");
    } else {
      album[i].classList.remove("active");
      pointBtnAll[i].classList.remove("active");
    }
  }

  disk_inner[pageNum].style.background = bgArray[pageNum][0];
}
