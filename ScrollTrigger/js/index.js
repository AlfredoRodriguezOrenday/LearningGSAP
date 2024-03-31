gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: 'carro1', //Identify the element that we want to animate
        markers: true, // show marks where the animation is starting and end
        start: 'top top', //hen the top of the trigger hits the top of the viewport
        end: '+=900 0', // the first fiel is how many scroll we want to add and the secpnd can be used to attach an element in X% of the proccess
        scrub: 3, // how much smooth the animation can be.
        pin: '.carro1' // attach an element to the screen that can be watched during the scroll
    }
});

tl.to('.carro1',{
    x:1000,
    duration: 2
})