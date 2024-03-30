/*gsap.to('.cuadrado_1',{ /// The method "to" is start-end 
    duratiion: 3,
    x: 600,
    delay: 1
});

gsap.from('.cuadrado_1',{ /// The method "to" is end-start 
    duratiion: 3,
    x: 600,
    delay: 1
});*/


let tl = gsap.timeline({
    reapeat: 0,
    //yoyo: true,
})

tl.to(".cuadrado_1",{
    duration:1.5,
    scale:2,
    x:500
})

tl.to(".cuadrado_2",{
    duration:1.5,
    scale:0.3,
    x:500
}, '=-1.5')

tl.to(".cuadrado_3",{
    duration:1.5,
    borderRadius:50,
    x:500
}, '=-1.5')

tl.to(".cuadrado_4",{
    duration:1.5,
    rotate:360,
    x:500
}, '=-1.5')