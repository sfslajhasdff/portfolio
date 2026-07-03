/*
FINAL BUILD V4.6
SCROLL ANIMATION
*/


document.addEventListener(

"DOMContentLoaded",

()=>{



gsap.registerPlugin(

ScrollTrigger

);









/* =====================
WORK REVEAL
===================== */


const works =

gsap.utils.toArray(

".work-item"

);



works.forEach(

item=>{


gsap.from(

item,

{


opacity:0,


y:80,


duration:1,


ease:"power3.out",



scrollTrigger:{


trigger:item,


start:"top 85%",


once:true


}



}



);



});









/* =====================
SKILL BAR
===================== */



const skillBars =

gsap.utils.toArray(

".bar span"

);





skillBars.forEach(

bar=>{



const target =

bar.getAttribute(

"data-width"

);





gsap.set(

bar,

{

width:"0%"

}

);





gsap.to(

bar,

{


width:target,


duration:1.6,


ease:"power3.out",



scrollTrigger:{


trigger:bar,


start:"top 85%",


once:true


}



}



);



});









/* =====================
SHORTS HOVER MOTION
===================== */


const shorts =

gsap.utils.toArray(

".short-card"

);



shorts.forEach(

card=>{



card.addEventListener(

"mouseenter",

()=>{


gsap.to(

card,

{


scale:1.08,


duration:.3


}

);


}

);





card.addEventListener(

"mouseleave",

()=>{


gsap.to(

card,

{


scale:1,


duration:.3


}

);


}

);



});









/* =====================
IMAGE MOTION
===================== */



const images =

gsap.utils.toArray(

".work-image img"

);





images.forEach(

img=>{



gsap.to(

img,

{


scale:1.05,


ease:"none",




scrollTrigger:{


trigger:img,


start:"top bottom",


end:"bottom top",


scrub:0.5


}



}



);



});









window.addEventListener(

"load",

()=>{


ScrollTrigger.refresh();


});






});

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImg = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector(".gallery-close");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const fullImage = image.dataset.full;

        lightboxImg.src = fullImage;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* 닫기 */

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


/* 배경 클릭 */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/* ESC */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/* =========================
CUSTOM CURSOR (Gallery)
========================= */

/*
아래 부분은 네 기존 커스텀 커서 코드에 맞춰
'VIEW'를 'CLICK'으로 바꾸는 예시야.

현재 커서 텍스트를 바꾸는 코드가 있다면
그 부분만 아래처럼 연결하면 된다.
*/

const galleryArea = document.querySelector(".gallery");

if (galleryArea) {

    galleryArea.addEventListener("mouseenter", () => {

        if (window.cursorText) {
            cursorText.innerHTML = "CLICK";
        }

    });

    galleryArea.addEventListener("mouseleave", () => {

        if (window.cursorText) {
            cursorText.innerHTML = "VIEW";
        }

    });

}

/* =========================
GALLERY DRAG SLIDER
========================= */

const galleryTrack = document.querySelector(".gallery-track");

if (galleryTrack) {

    let isDown = false;
    let startX;
    let scrollLeft;

    galleryTrack.addEventListener("mousedown", (e) => {

        isDown = true;
        galleryTrack.classList.add("active");

        startX = e.pageX - galleryTrack.offsetLeft;
        scrollLeft = galleryTrack.scrollLeft;

    });

    galleryTrack.addEventListener("mouseleave", () => {

        isDown = false;

    });

    galleryTrack.addEventListener("mouseup", () => {

        isDown = false;

    });

    galleryTrack.addEventListener("mousemove", (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - galleryTrack.offsetLeft;

        const walk = (x - startX) * 2;

        galleryTrack.scrollLeft = scrollLeft - walk;

    });

}