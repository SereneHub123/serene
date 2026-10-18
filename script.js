const discord = document.querySelector(".discord");
const headInfo = document.querySelector(".head__info");
const heroTexts = document.querySelector(".hero_texts");
const cons = document.querySelectorAll(".cons");
const toast = document.querySelector('.toast');



document.addEventListener('DOMContentLoaded', () => {

headInfo.style.opacity = "0";
heroTexts.style.opacity = "0";
toast.style.opacity = "0";



cons.forEach((element) => {
    element.style.opacity = "0";

});

setTimeout(() => {
    heroTexts.style.animation = "fade 2s ease 1 normal";
    heroTexts.style.opacity = "1";

}, 400);
setTimeout(() => {
    headInfo.style.animation = "fade 4s ease 1 normal";
    headInfo.style.opacity = "1";

}, 1200);

setTimeout(() => {
    cons.forEach((element) => {
     element.style.animation = "fade 1s ease 1 normal";
    element.style.opacity = "1";})

  

}, 1500);

discord.onclick = () => {
  navigator.clipboard.writeText("serenestriker_");
  
  discord.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  setTimeout(() => {
    discord.innerHTML = '<i class="fa-brands fa-discord"></i>';

  }, 1000);
   const audioDis = new Audio('assets/click.mp3');
  audioDis.play();
}})


function playClick(){
  const audio = new Audio('assets/click.mp3');
  audio.play();
}

const toastBar = toast.querySelector(".timer");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let toastShown = false;
let toastClosed = false;

function invisible(){
   if(!toastShown || toastClosed) return;
   toastClosed = true;

   try{
    sessionStorage.setItem("serene:toast-dismissed", "1");
   }catch(e){}

   toast.style.animation = "toastSink 0.4s ease 1 both";

   const hide = () => {
    toast.hidden = true;
    toast.style.display = "none";
   };

   if(reduceMotion){
    hide();
    return;
   }

   // Only our own sink animation may hide it. The countdown's
   // animationend bubbles up to here as well, so match on the target.
   toast.addEventListener("animationend", (event) => {
    if(event.target === toast) hide();
   });

   setTimeout(hide, 450);
  }

  setTimeout(() => {
    let dismissed = false;

    try{
     dismissed = sessionStorage.getItem("serene:toast-dismissed") === "1";
    }catch(e){}

    if(dismissed) return;

    toastShown = true;
    toast.hidden = false;
    toast.style.display = "flex";
    toast.style.opacity = "1";

    // Only inline the rise when motion is welcome. An inline animation
    // would otherwise beat the reduced-motion rule in the stylesheet,
    // and opacity would stay at the 0 we set on load.
    if(!reduceMotion){
     toast.style.animation = "toastRight 0.5s ease 1 both";
    }

    // The bar pauses on hover, so let it announce the real end of the
    // dwell. The timeout covers reduced motion, where it never runs.
    if(toastBar && !reduceMotion){
     toastBar.addEventListener("animationend", invisible, { once: true });
    }

    setTimeout(invisible, 8000);
  }, 2500);

  document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") invisible();
  });
