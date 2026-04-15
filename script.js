const discord = document.querySelector(".discord");
const headInfo = document.querySelector(".head__info");
const heroTexts = document.querySelector(".hero_texts");
const cons = document.querySelectorAll(".cons");

document.addEventListener('DOMContentLoaded', () => {

headInfo.style.opacity = "0";

cons.forEach((element) => {
    element.style.opacity = "0";

});
setTimeout(() => {
    headInfo.style.animation = "fade 1s ease 1 normal";
    headInfo.style.opacity = "1";

}, 800)

setTimeout(() => {
    cons.forEach((element) => {
     element.style.animation = "fade 1s ease 1 normal";
    element.style.opacity = "1";})

  

}, 1200)

discord.onclick = () => {
  navigator.clipboard.writeText("serenestriker_");
  
  discord.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  setTimeout(() => {
    discord.innerHTML = '<i class="fa-brands fa-discord"></i>';

  }, 1000);
}})

;

