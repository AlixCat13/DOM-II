// Your code goes here

//(1) double click
const heading = document.querySelector('.logo-heading')
heading.addEventListener('dblclick', (event) => {
    event.target.style.color = 'DarkOrchid'
})

//(2)
const navMenu = document.querySelectorAll('.nav-link')
console.log(navMenu)
navMenu[0].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
})
navMenu[1].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
})
navMenu[2].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
})
navMenu[3].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
})

//(2/3) mouse over / mouse leave
const funBus = document.querySelector('.intro img')
console.log(funBus);
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.2)'
    funBus.style.transition = 'all 0.3s'
})

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1.0)'
})

//(4) wheel
const introHead = document.querySelector('.intro h2')
introHead.onwheel = zoom;

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    //restricting scale
    scale = Math.min(Math.max(.125, scale) ,2);

    //applying scale transform
    introHead.style.transform = `scale(${scale})`
}

let scale = 1;


//(5) mouse down                         
const destination = document.querySelector('.content-destination')
destination.addEventListener('mousedown', () => {
    destination.style.color = "DarkCyan"
})


//(6) resize
const boatImg = document.querySelector('.content-destination img')
window.addEventListener('resize', () => {
    boatImg.src = 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-cruise-breakfast-1-1100x734.jpg'
})

//(7) click
const btn = document.querySelectorAll('.btn')
console.log(btn)
btn[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'GoldenRod'
})
btn[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'Gainsboro'
    event.target.style.color = 'DarkSlateGrey'
})
btn[2].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'DodgerBlue'
})





//(8)




//(9)




//(10)







