function toggleLinks(anchor) {
  const toggleDiv = anchor.nextElementSibling;
  const isActive = anchor.classList.contains("active");
  const allToggleDivs = document.querySelectorAll(".toggle-links");

  allToggleDivs.forEach((div) => {
    div.classList.add("hide");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });

  if (!isActive) {
    toggleDiv.classList.remove("hide");
    anchor.classList.add("active");
  }
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    toggleLinks(navLink);
  });
});

const hamburger = document.querySelector(".hamburger");
const listDiv = document.querySelector(".list-div");

hamburger.addEventListener("click", function () {
  listDiv.classList.toggle("show");
  if (listDiv.classList.contains("show")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
});
