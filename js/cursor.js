/*
FINAL BUILD V4.6
CUSTOM CURSOR
*/


document.addEventListener(

"DOMContentLoaded",

()=>{



const cursor =

document.querySelector(

".cursor"

);



if(!cursor) return;





let mouseX = 0;

let mouseY = 0;


let currentX = 0;

let currentY = 0;







window.addEventListener(

"mousemove",

(e)=>{


mouseX = e.clientX;


mouseY = e.clientY;



});









function animateCursor(){



currentX +=

(mouseX-currentX)*0.45;



currentY +=

(mouseY-currentY)*0.45;





cursor.style.transform =

`translate3d(${currentX}px,${currentY}px,0) translate(-50%,-50%)`;





requestAnimationFrame(

animateCursor

);



}



animateCursor();









const hoverElements =

document.querySelectorAll(

"a, .work-item, .short-card, button"

);





hoverElements.forEach(

item=>{



item.addEventListener(

"mouseenter",

()=>{


cursor.classList.add(

"hover"

);


}

);



item.addEventListener(

"mouseleave",

()=>{


cursor.classList.remove(

"hover"

);


}

);



});






});