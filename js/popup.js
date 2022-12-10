const medium=document.querySelector(".medium");
const popupMedium=document.querySelector(".medium-button");

const pro=document.querySelector(".pro");
const popupPro=document.querySelector(".pro-button");

const light=document.querySelector(".light");
const popupLight=document.querySelector(".light-button");

medium.addEventListener("click", function (evnmedium) {
popupMedium.classList.toggle("form-button");
});

pro.addEventListener("click", function (evnpro) {
popupPro.classList.toggle("form-button");
});

light.addEventListener("click", function (evnlight) {
  popupLight.classList.toggle("form-button");
});