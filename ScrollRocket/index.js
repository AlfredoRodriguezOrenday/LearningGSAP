gsap.registerPlugin(ScrollTrigger);

const nave = document.querySelector('.nave');

const planeta1 = document.querySelector('.planeta1');

const planeta2 = document.querySelector('.planeta2');

const planeta3 = document.querySelector('.planeta3');

const planeta4 = document.querySelector('.planeta4');

const planeta5 = document.querySelector('.planeta5');

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.contenedor__animacion',
        pin: true,
        markers: true,
        start:'top top',
        end: '100% 100%',
        scrub: 'ture'
    },
});

tl.to(nave, {scale: 0.5, y:'30vh', duration: 4})

tl.to(planeta1,{ opacity:1, y: '-50vh', scale: 1.3, duration: 3.5})

tl.to(planeta2,{ opacity:1, y: '-90vh', scale: 1, duration: 3.5})

tl.to(nave,{ rotate:230, duration: 3.5})

tl.to(nave,{ x:'-35vw', duration: 4})

tl.to(planeta2,{ opacity:0, y: '-150vh', scale: 1, duration: 3.5})

tl.to(nave,{ rotate:115, duration: 3.5})

tl.to(planeta1,{ opacity:0, y: '-150vh', scale: 0.6, duration: 3.5})

tl.to(nave,{x:'75vh', duration: 3.5})

tl.to(planeta3,{ x: '-120vw', scale: 1.3, opacity:1, duration: 8})

tl.to(nave,{ rotate:250, duration: 5})

tl.to(nave,{ x:'-35vw', y:280, duration: 8})

tl.to(planeta3,{ x: -100, opacity:0, scale:0.3, duration: 8})

tl.to(planeta4,{ x: '130vh', scale: 1.2, opacity:1, duration: 8})

tl.to(nave,{ rotate: 105, duration: 8})

tl.to(nave,{ x:'35vw', y:280, duration: 8})

tl.to(planeta4,{ x: -100, opacity:0, scale:0.3, duration: 4}, '=-2.0')


tl.to(planeta5,{ y:'-30vw', opacity:1, scale:1.2, duration:8})

tl.to(nave,{ rotate: 265, duration: 4})

tl.to(nave,{ x:'3vw', y:240, duration: 8})

tl.to(nave,{ rotate: 180,  duration: 8})

tl.to(planeta5,{ y: '-100vw', opacity:0, scale:0.3, duration: 8})

tl.to(nave,{y:'0vw', duration: 8})

