const innerContainer = document.querySelector(".inner-container");
const nameContainer = document.querySelector(".name-container");
const aboutContainer = document.querySelector(".about-container");
const contactContainer = document.querySelector(".contact-container");
const emailContainer = document.querySelector(".email-container");
const preloadContainer = document.querySelector(".preloader-container");

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const aboutBtn = document.getElementById("about");
const introductionBtn = document.getElementById("introduction");
const teamBtn = document.getElementById("team");
const contactBtn = document.getElementById("contact");
const backTeamBtn = document.getElementById("back-team");
const backAboutBtn = document.getElementById("back-about");
const backIntroductionBtn = document.getElementById("back-introduction");
const backContactBtn = document.getElementById("back-contact");

const navigate = (target, direction = false) => {
  if (direction) {
    target.classList.remove("hover");
    target.classList.add("unhover");
    setTimeout(() => {
      emailContainer.classList.remove("unhover");
      emailContainer.classList.add("hoverEmail");
    }, 1000);
    return;
  }
  emailContainer.classList.remove("hoverEmail");
  emailContainer.classList.add("unhover");
  setTimeout(() => {
    target.classList.remove("unhover");
    target.classList.add("hover");
  }, 1000);
};

teamBtn.addEventListener("click", (e) => {
  navigate(nameContainer);
});

aboutBtn.addEventListener("click", (e) => {
  navigate(aboutContainer);
});

contactBtn.addEventListener("click", (e) => {
  navigate(contactContainer);
});

backTeamBtn.addEventListener("click", (e) => {
  navigate(nameContainer, true);
});

backAboutBtn.addEventListener("click", (e) => {
  navigate(aboutContainer, true);
});

backContactBtn.addEventListener("click", (e) => {
  navigate(contactContainer, true);
});

window.addEventListener("load", function () {
  preloadContainer.style.opacity = 1;
  this.setTimeout(function () {
    preloadContainer.style.opacity = 0;
    setTimeout(function () {
      preloadContainer.style.display = "none";
      innerContainer.style.opacity = 1;
    }, 2000);
  }, 2000);
}); 