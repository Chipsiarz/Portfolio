const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

let prevScrollpos = window.pageYOffset;

function menuOnClick() {
  menuBar.classList.toggle("change");
  nav.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-8vh";

    menuBar.classList.remove("change");
    nav.classList.remove("change");
    menuBg.classList.remove("change-bg");
  }
  prevScrollpos = currentScrollPos;
};

function showMore() {
  const leftElements = Array.from(
    document.getElementsByClassName("worksLeftHide")
  );

  const rightElements = Array.from(
    document.getElementsByClassName("worksRightHide")
  );

  const showBtn = document.getElementById("showBtn");

  for (let i = 0; i < leftElements.length; i++) {
    if (leftElements[i].style.display === "none") {
      leftElements[i].style.display = "flex";
      showBtn.textContent = "Show Less";
    } else {
      leftElements[i].style.display = "none";
      showBtn.textContent = "Show More";
    }
  }

  for (let i = 0; i < rightElements.length; i++) {
    if (rightElements[i].style.display === "none") {
      rightElements[i].style.display = "flex";
      console.log("tak");
    } else {
      rightElements[i].style.display = "none";
      console.log("nie");
    }
  }
}
