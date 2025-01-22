var tl = gsap.timeline()
tl.from(".navbar h1",{
    y:-30,
    opacity:0,
    duration:0.4,
    delay:1
})
tl.from(".navbar .list li a",{
    y:-30,
    opacity:0,
    // duration:1,
    stagger:0.3,
})
gsap.to(".navbar",{
    backgroundColor:"black",
    height:"8rem",
    textAlign:"center",
    scrollTrigger:{
        trigger:"navbar",
        scroller:"body",
        scrub:5,
        duration:0.5
    }
})
gsap.from(".rightbox",{
    scale:0.5,
    opacity:0,
    x:350,
    duration:1
})
gsap.from(".leftbox",{
    opacity:0,
    x:-350,
    duration:1
})
gsap.from(".part1",{
    stagger:1,
    scale:0.5,
    opacity:0,
    scrollTrigger:".part1",
    scrub:5,
})
gsap.from(".leftbox2",{
    x:-250,
    opacity:0,
    scrollTrigger:{
        trigger:".leftbox2",
        scroller:"body",
        scrub:5,
    }
})
gsap.from(".leftbox2 .buttons",{
    x:-250,
    opacity:0,
    scrollTrigger:{
        trigger:".leftbox2",
        scroller:"body",
        scrub:5,
    }
})
gsap.from(".rightbox2",{
    x:250,
    opacity:0,
    scrollTrigger:{
        trigger:".rightbox2",
        scroller:"body",
        scrub:5,
    }
})

gsap.from(".caption, .theading",{
    x:-250,
    opaciity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:".caption, .theading",
        scroller:"body",
        scrub:5,
    }
})
gsap.from(".data1, .data2",{
    y:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:".data1, .data2",
        scroller:"body",
        scrub:5,
    }
})
gsap.from(".data3, .data4, .data5, .data6",{
    y:"10rem",
    opacity:0,
    scrollTrigger:{
        trigger:".data1, .data2",
        scroller:"body",
        scrub:5,
    }
})
gsap.from(".ONEY,.TWOY,.THREEY",{
    y:"30rem",
    opacity:0,
    backgroundColor:"white",
    scrollTrigger:{
        trigger:".part4",
        scroller:"body",
        scrub:5,
    },
    duration:0.5,
})
gsap.from(".para4,.heading4",{
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".part4",
        scroller:"body",
        scrub:5,
    },
    duration:0.5,
})
