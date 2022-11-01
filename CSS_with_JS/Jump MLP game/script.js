
const jump = () => {
    
    const RDash = document.querySelector('#RDash')
    RDash.classList.add('jump')
    
    setTimeout(() => {
        RDash.classList.remove('jump')
    },2000)

}

const loop = setInterval(() => {
    
    const clouds = document.querySelector('.clouds')
    const cldPosition = clouds.offsetLeft

    const change = document.querySelector('.change')
    const chgPosition = change.offsetLeft
    
    const RDash = document.querySelector('#RDash')
    const rdPosition = +window.getComputedStyle(RDash).bottom.replace('px', '')

    console.log(chgPosition)
    
    if (chgPosition <= 145 && chgPosition > 0 && rdPosition < 110) {
        clouds.style.animation = 'none'
        clouds.style.left = `${cldPosition}px`

        change.style.animation = 'none'
        change.style.left = `${chgPosition}px`
        
        RDash.style.animation = 'none'
        RDash.style.bottom = `${rdPosition}px`
        
        RDash.src = 'gover.png'
        RDash.style.width = '110px'
        RDash.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)


document.addEventListener('keydown', jump)
