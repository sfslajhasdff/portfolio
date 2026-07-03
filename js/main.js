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
// UNIVERSAL DRAG SLIDER
// =====================

function dragSlider(selector){

    const slider = document.querySelector(selector);

    if(!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener("mousedown",(e)=>{

        isDown = true;

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

    });

    document.addEventListener("mouseup",()=>{

        isDown = false;

    });

    slider.addEventListener("mouseleave",()=>{

        isDown = false;

    });

    slider.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const move = (x - startX) * 1.5;

        slider.scrollLeft = scrollLeft - move;

    });

}

dragSlider(".shorts-track");
dragSlider(".gallery-track");



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

// =====================
// GALLERY DRAG FIX
// =====================

const galleryTrack = document.querySelector(".gallery-track");

if (galleryTrack) {

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    galleryTrack.addEventListener("mousedown", (e) => {

        // 이미지 드래그 방지
        e.preventDefault();

        isDown = true;

        startX = e.pageX;
        scrollLeft = galleryTrack.scrollLeft;

        galleryTrack.classList.add("dragging");

    });

    window.addEventListener("mouseup", () => {

        isDown = false;

        galleryTrack.classList.remove("dragging");

    });

    galleryTrack.addEventListener("mouseleave", () => {

        isDown = false;

        galleryTrack.classList.remove("dragging");

    });

    window.addEventListener("mousemove", (e) => {

        if (!isDown) return;

        const walk = (e.pageX - startX) * 1.4;

        galleryTrack.scrollLeft = scrollLeft - walk;

    });

}

}