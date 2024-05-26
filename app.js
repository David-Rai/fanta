
let t1=gsap.timeline(
{
    scrollTrigger:{
        trigger:".fanta",
        scroller:"body",
        start:"top 10%",
        end:"bottom -100%",
        scrub:true
    }
}
);

t1.to(".fanta", {  
    top: "120%",
    left:"0%"
})
.to(".fanta", {  
    top: "215%",
    left:"40%",
    height:"40vh",
    rotate:-20
});

gsap.to(".orange2", {
    top: "150%",
    left:"14%",
    rotate:360,
    scrollTrigger:{
        trigger:".fanta",
        start:"top 10%",
        scrub:true
    }
});

gsap.to(".orange", {
    left:"70%",
    top: "150%",

    scrollTrigger:{
        trigger:".fanta",
        start:"top 10%",
        end:"bottom -20%",
        scrub:true
    }
});

gsap.to(".leaf", {
    left:"70%",
    top: "100%",
    rotate:180,
    scrollTrigger:{
        trigger:".fanta",
        start:"top 10%",
        end:"bottom -20%",
        scrub:true
    }
});

gsap.to(".leaf2", {
    right:"80%",
    top: "96%",
    rotate:180,
    scrollTrigger:{
        trigger:".fanta",
        start:"top 10%",
        end:"bottom -20%",
        scrub:true
    }
});

gsap.from(".cola", {
   y:-150,
   rotate:0,
    scrollTrigger:{
        trigger:".cola",
        scrub:true
    }
});
gsap.from(".pepsi", {
   y:-150,
   rotate:0,
    scrollTrigger:{
        trigger:".cola",
        scrub:true
    }
});
