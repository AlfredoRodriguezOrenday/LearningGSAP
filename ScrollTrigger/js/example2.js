gsap.registerPlugin(ScrollTrigger);

let tl= gsap.timeline({
    scrollTrigger:{
        trigger: '.contenedor__imagenes',
        pin: true,
        start: 'top top',
        end: '+=700 0',
        scrub: 2,
        //markers: true
    }
});

tl.to('.carro1', {
    x: '1000',
    duration: 5
});

tl.to('.carro2', {
    x: '1000',
    duration: 5
},'-=5');