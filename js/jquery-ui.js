/*
FINAL BUILD V4.6
JQUERY UI INTERACTION
*/


$(document).ready(function(){







/* =====================
SHORTS DRAG SCROLL
===================== */


const slider =

$(".shorts-track");





let isDown = false;

let startX;

let scrollLeft;







slider.on(

"mousedown",

function(e){



isDown = true;



slider.addClass(

"active"

);



startX =

e.pageX - slider.offset().left;



scrollLeft =

slider.scrollLeft();





});







slider.on(

"mouseleave mouseup",

function(){



isDown = false;



slider.removeClass(

"active"

);



});









slider.on(

"mousemove",

function(e){



if(!isDown)

return;





e.preventDefault();





const x =

e.pageX - slider.offset().left;



const walk =

(x-startX)*1.5;





slider.scrollLeft(

scrollLeft-walk

);



});









/* =====================
MOUSE WHEEL HORIZONTAL
===================== */



slider.on(

"wheel",

function(e){



if(e.originalEvent.deltaY !==0){



e.preventDefault();





this.scrollLeft +=

e.originalEvent.deltaY;



}



});









/* =====================
NAV HOVER EFFECT
===================== */



$("nav a")

.on(

"mouseenter",

function(){



$(this)

.stop()

.animate(

{

opacity:.5

},

200

);



})

.on(

"mouseleave",

function(){



$(this)

.stop()

.animate(

{

opacity:1

},

200

);



});









/* =====================
WORK IMAGE HOVER
===================== */



$(".work-image")

.on(

"mouseenter",

function(){



$(this)

.find("img")

.stop()

.animate(

{

scale:1.03

},

500

);



})



.on(

"mouseleave",

function(){



$(this)

.find("img")

.stop()

.animate(

{

scale:1

},

500

);



});







});