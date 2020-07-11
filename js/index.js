// Your code goes here
const heading = document.querySelector('.logo-heading')
heading.addEventListener('dblclick', (event) => {
    event.target.style.color = 'pink'
})

const funBus = document.querySelector('.intro img')
console.log(funBus);
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.2)'
    funBus.style.transition = 'all 0.3s'
})

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1.0)'
})

const introHead = document.querySelector('.intro h2')
introHead.addEventListener()