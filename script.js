const tl = gsap.timeline({
    repeat: 0,
})


tl.from('.card_1',{
    duration: 2,
    y:'-80vh',
    ease: 'power3.inOut'
})

tl.from('.card_2',{
    duration: 2,
    x:'-55vh',
    ease: 'power3.inOut'
}, '=-1.5')

tl.from('.card_3',{
    duration: 2,
    x:'60vh',
    ease: 'power3.inOut'
}, '=-2')

tl.from('.card_4',{
    duration: 2,
    y:'30vh',
    ease: 'power3.inOut'
}, '=-2')

tl.from('.card_5',{
    duration: 2,
    y:'30vh',
    ease: 'power3.inOut'
}, '=-2')

tl.from('.carrera',{
    duration: 2,
    x:'-45vh',
    ease: 'power3.inOut'
}, '=-2')

tl.from('.cohete',{
    duration: 2,
    x:'45vh',
    ease: 'power3.inOut'
}, '=-2')