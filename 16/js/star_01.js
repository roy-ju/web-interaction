//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

window.onload = function () {
  const starBg = document.querySelector(".starBg");
  const title = document.querySelector(".title");
  const bottom = document.querySelector(".bottom");

  window.addEventListener("scroll", () => {
    let scrollY = this.scrollY;

    starBg.style.transform = `translateY(${-scrollY / 1.3}px)`;
    title.style.transform = `translateY(${-scrollY / 1.7}px)`;
  });

  setTimeout(() => {
    window.scrollTo({
      top: bottom.offsetTop,
      behavior: "smooth",
    });

    // bottom.scrollIntoView({ behavior: "smooth" });
  }, 2000);
};
