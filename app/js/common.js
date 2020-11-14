document.addEventListener('DOMContentLoaded', () => {


    const $body = document.body
    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let clientX
    let clientY

    $body.addEventListener('mousemove', e => {

        // console.log(e.pageX, e.pageY)

        clientX = e.pageX
        clientY = e.pageY

        let request = requestAnimationFrame(updateMe)

    })


    function updateMe() {
        let dx = clientX - cx
        let dy = clientY - cy

        let tiltx = dy / cy
        let tilty = dx / cx

        const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)) * 12
        gsap.to('.content', 1, {transform: `rotate3d(${tiltx}, ${tilty}, 0, ${radius}deg)`})
    }


    gsap.to('.card', { zoom: .98 })
    gsap.to('.l_main', { opacity: 1, duration: .1 })
    gsap.to('.l2_main', { opacity: 1, left: -10, top: 10, duration: .25, delay: .25 })
    gsap.to('.l3_main', { opacity: 1, left: -20, top: 20, duration: .25, delay: .25 })
    gsap.to('.card-russia', { opacity: .07, duration: .1 })
    gsap.to('.card-logo_w', { opacity: 1, duration: .225 })
    gsap.to('.card-chip', { opacity: 1, duration: .225 })
    gsap.to('.card-valid', { opacity: 1, zoom: 1, duration: .1, delay: .25 })
    gsap.to('.card-number-holder', { opacity: 1, zoom: 1, duration: .1, delay: .25 })


})