//smooth scroll using locomotive lib
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//smooth scroll ends

//animation using gsap lib
var tl= gsap.timeline();

tl.to("#page1",{//go down to 100vh at 0 sec and half it's size
    y:"100vh",
    scale:0.6,//half the size
    duration:0
})
tl.to("#page1",{//go back to 30 vh at 1 sec with diminished size
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1", {//rotate at the same height and get to full size
    y:"30vh",
    rotate:1080,//rotate
    scale:1,//full size 
    duration:0.8
})

//animation ends