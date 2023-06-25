//after 1s,takes 2s
gsap.to(".class-loader",{
    height:"40vh",
    background:"#42a189",
    ease:"expo",
    delay:1,
    duration:2,
});
//after 3s,takes 2s
gsap.to(".class-loader",{
    height:"70vh",
    background:"#7f66c7",
    ease:"expo",
    delay:3,
    duration:2,
});
//after 5s ,takes 2s
gsap.to(".class-loader",{
    height:"85vh",
    background:"#cf6c83",
    ease:"expo",
    delay:5,
    duration:2,
});
//after 7s,takes 2s
gsap.to(".class-loader",{
    height:"100vh",
    background:"#ededef",
    ease:"expo",
    delay:7,
    duration:2,
});
//after 8s,takes 2 s
gsap.to(".preloader",{
    ease:"power4",
    delay:8,
    duration:1,
    opacity:0,
});
//after 8 s,takes1.5s
gsap.to(".nike",{
    y:"-12.5vh",
    width:"35rem",
    rotate:"25deg",
    ease:"power4",
    delay:8,
    duration:1.5,
});

gsap.from("h1",{

    ease:"power4",
    delay:8,
    duration:2,
    opacity:0,
   y:'200', 
   overflow:"hidden"
});

gsap.from("h2",{
    
        ease:"power4",
        delay:8,
        duration:1.25,
        opacity:0,
       y:'200', 
       overflow:"hidden"
    });