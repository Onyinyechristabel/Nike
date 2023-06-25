let darkmode =false;
const circle =document.querySelector(".circle");
circle.onclick = toggleDarkMode;

function toggleDarkMode(){
    if(darkmode){
        darkmode = false;
        gsap.set(".circle",{
            background:"#2c2c2c",
        });
        gsap.from(".circle",{
            scale:120,
        }
        );
        gsap.set("body",{
            background:"#ededef",
        });
        gsap.to("body",{
            background:"#ededef",
            delay:0.2,
            color:"#2c2c2c",
        });
        gsap.set(".logo",{
            filter:invert(1)
        })

    }else
    { 
        gsap.to(".circle",{
        scale:120,
        background:"#2c2c2c",
    });
    gsap.set("body",{
        background:"#2c2c2c",
        delay:0.2,
        color:"#ededef"
    });


gsap.set(".logo",{
    
    filter:"unset",
    
});
gsap.set(".circle",{
    scale:1,
    background:"#ededef",
    delay:0.5,

});
darkmode = true;}

}
    