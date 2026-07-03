/*
FINAL BUILD V4.6
MAIN SYSTEM
*/


document.addEventListener(

"DOMContentLoaded",

()=>{



gsap.registerPlugin(

ScrollTrigger

);







/* =====================
LENIS SMOOTH SCROLL
===================== */


const lenis = new Lenis({


duration:0.1,

smoothWheel:true,

smoothTouch:false,

wheelMultiplier:1.15,

lerp:0.25

});







lenis.on(

"scroll",

ScrollTrigger.update

);







function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);



ScrollTrigger.refresh();









/* =====================
ANCHOR LINK
===================== */


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{



anchor.addEventListener(

"click",

(e)=>{



const target =

document.querySelector(

anchor.getAttribute("href")

);



if(target){


e.preventDefault();



lenis.scrollTo(

target,

{

offset:-80,

duration:1

}

);



}



}



);



});









/* =====================
HERO TEXT ANIMATION
===================== */



const heroTimeline =

gsap.timeline();







heroTimeline



.from(

".hero-content p",

{


opacity:0,


y:30,


duration:.8,


ease:"power3.out"


}



)







.to(

".hero-title span",

{


y:"0%",


opacity:1,


duration:1.2,


stagger:.2,


ease:"power4.out"


}



)








.from(

".hero-sub",

{


opacity:0,


y:30,


duration:.8


}



);









/* =====================
HEADER MOTION
===================== */


gsap.from(

"header",

{


opacity:0,


y:-40,


duration:1,


ease:"power3.out"


}

);









/* =====================
SECTION FADE
===================== */


gsap.utils.toArray(

".section-title"

)

.forEach(

title=>{


gsap.from(

title,

{


opacity:0,


y:40,


duration:1,



scrollTrigger:{


trigger:title,


start:"top 85%",


once:true


}



}



);



});









/* =====================
REFRESH
===================== */



window.addEventListener(

"load",

()=>{


setTimeout(()=>{


ScrollTrigger.refresh();


},500);



});





});

// =====================
// SHORTS DRAG SLIDER
// =====================


const shortsSlider = document.querySelector(".shorts-track");


if(shortsSlider){


let isDown = false;

let startX;

let scrollLeft;



shortsSlider.addEventListener(
"mousedown",
(e)=>{


isDown = true;


startX = e.pageX - shortsSlider.offsetLeft;


scrollLeft = shortsSlider.scrollLeft;


});





shortsSlider.addEventListener(
"mouseleave",
()=>{


isDown = false;


});





shortsSlider.addEventListener(
"mouseup",
()=>{


isDown = false;


});





shortsSlider.addEventListener(
"mousemove",
(e)=>{


if(!isDown) return;


e.preventDefault();



const x = e.pageX - shortsSlider.offsetLeft;


const move = (x - startX) * 1.5;



shortsSlider.scrollLeft = scrollLeft - move;



});



}

// =====================
// ABOUT MOTION
// =====================


const aboutSection = document.querySelector(".about");


if(aboutSection){


const aboutObserver = new IntersectionObserver((entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){


aboutSection.classList.add("show");



const circles = document.querySelectorAll(".circle");



circles.forEach(circle=>{


const percent = circle.dataset.percent;


circle.style.background =

`conic-gradient(
#A855F7 ${percent * 3.6}deg,
rgba(255,255,255,.1) 0deg
)`;


});



}



});


},

{

threshold:.3

});



aboutObserver.observe(aboutSection);



}