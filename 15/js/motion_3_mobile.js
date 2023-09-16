let prevBtn, nextBtn;
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
  prevBtn = document.querySelectorAll("button")[0];
  nextBtn = document.querySelectorAll("button")[1];

  contentWrap = document.querySelector(".contentWrap");
  disk_inner = document.querySelectorAll(".disk_inner");
  album = document.querySelectorAll(".album");
  pointBtnAll = document.querySelectorAll(".pointWrap li");
  totalNum = album.length;

  prevBtn.addEventListener("click", function () {
    if (pageNum > 0) {
      pageNum--;
    } else {
      pageNum = totalNum - 1;
    }
    pageChangeFunc();
  });

  nextBtn.addEventListener("click", function () {
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

  if (mobileChk()) {
    contentWrap.addEventListener("touchstart", touchFunc, false);
    contentWrap.addEventListener("touchend", touchFunc, false);
  }

  let start_X = 0;
  let end_X = 0;

  function touchFunc(evt) {
    let type = null;
    let touch = null;

    switch (evt.type) {
      case "touchstart":
        type = "mousedown";
        touch = evt.changedTouches[0];
        start_X = touch.clientX;

        end_X = 0;
        break;

      case "touchend":
        type = "mouseup";
        touch = evt.changedTouches[0];
        end_X = touch.clientX;

        let chkNum = start_X - end_X;
        let chkNumAbs = Math.abs(chkNum);

        if (chkNumAbs > 100) {
          if (chkNum < 0) {
            pageNum--;
          } else {
            pageNum++;
          }
          pageChangeFunc();
        }
        break;
    }
  }

  pageChangeFunc();
};

function pageChangeFunc() {
  console.log(pageNum);

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

function mobileChk() {
  let mobileKeyWords = new Array(
    "Android",
    "iPhone",
    "iPod",
    "BlackBerry",
    "Windows CE",
    "SAMSUNG",
    "LG",
    "MOT",
    "SonyEricsson"
  );
  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
}
