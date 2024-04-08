Shery.makeMagnet(".icon,.navleft, button");
Shery.mouseFollower();
Shery.hoverWithMediaCircle(".heading h1",{
    videos:["./1.mp4","./2.mp4","./3.mp4"]
});

gsap.to(".ftext",{
    scrollTrigger:{
        trigger : ".pt",
        pin  : true,
        start :" top top",
        end : "bottom bottom",
        endTrigger : ".last",
        scrub: 1
    },
    y: "-300%",
    ease : Power2
})

let sections = document.querySelectorAll(".ftext");
Shery.imageEffect(".pt .img",{
    style :4,
    // config : {onMouse: {value: 1}  },
    sildStyle: (setScroll) =>{
        sections.forEach(function(section , index){
            ScrollTrigger.create({
                trigger : section,
                start : "top top",
                scrub: 1,
                onUpdate: function(prog)
                {
                    setScroll(prog.progress+index)
                }
            })
        })
    }
})