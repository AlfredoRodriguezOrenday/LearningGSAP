const tl = gsap.timeline({
    repeat: 0,
})


tl.from('.card_1',{
    duration: 2,
    y:'-80vh'
})

tl.from('.card_2',{
    duration: 2,
    x:'-55vh'
}, '=-1.5')

tl.from('.card_3',{
    duration: 2,
    x:'60vh'
}, '=-2')