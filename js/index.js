// Your code goes here


//(1) scroll

window.addEventListener('scroll', () => {
    console.log('window.scrollY', window.scrollY)
    if (window.scrollY >= 600) {
        alert("Don't wait! Adventure is out there! Book your getaway now!")
    }
})

//(2) double click
const heading = document.querySelector('.logo-heading')
heading.addEventListener('dblclick', () => {
    heading.style.color = 'DarkOrchid'
    heading.style.fontSize = '5rem'
})

//(3) mouse enter / mouse leave
const navMenu = document.querySelectorAll('.nav-link')
console.log(navMenu)
navMenu[0].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
    event.target.style.fontSize = '2.2rem'
})
navMenu[1].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
    event.target.style.fontSize = '2.2rem'
})
navMenu[2].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
    event.target.style.fontSize = '2.2rem'
})
navMenu[3].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'DarkCyan'
    event.target.style.fontSize = '2.2rem'
})

navMenu[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = '#212529'
    event.target.style.fontSize = '1.6rem'
})
navMenu[1].addEventListener('mouseleave', (event) => {
    event.target.style.color = '#212529'
    event.target.style.fontSize = '1.6rem'
})
navMenu[2].addEventListener('mouseleave', (event) => {
    event.target.style.color = '#212529'
    event.target.style.fontSize = '1.6rem'
})
navMenu[3].addEventListener('mouseleave', (event) => {
    event.target.style.color = '#212529'
    event.target.style.fontSize = '1.6rem'
})


//(4) mouse over / mouse leave
const funBus = document.querySelector('.intro img')
console.log(funBus);
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.2)'
    funBus.style.transition = 'all 0.3s'
})

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1.0)'
})

//mouse over / mouse leave

const travelPics = document.querySelectorAll('.img-content img')
console.log(travelPics);
travelPics[0].addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.2)'
    event.target.style.transition = 'all 0.3s'
})

travelPics[0].addEventListener('mouseleave', () => {
    event.target.style.transform = 'scale(1.0)'
})

travelPics[1].addEventListener('mouseover', () => {
    event.target.style.transform = 'scale(1.2)'
    event.target.style.transition = 'all 0.3s'
})

travelPics[1].addEventListener('mouseleave', () => {
    event.target.style.transform = 'scale(1.0)'
})


//(5) wheel
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


//(6) mouse down                         
const destination = document.querySelector('.content-destination h2')
destination.addEventListener('mousedown', () => {
    destination.textContent = "Adventure is Out There!!"
    destination.style.fontSize = '3rem'
    destination.style.fontFamily = 'Indie Flower, cursive';
})

//(7) mouse up
const destination2 = document.querySelector('.content-destination h2')
destination2.addEventListener('mouseup', () => {
destination.textContent = 'Pick Your Destination'
destination2.style.fontSize = '3rem'
destination2.style.fontFamily = 'Indie Flower, cursive';
})


//(8) resize
const boatImg = document.querySelector('.content-destination img')
window.addEventListener('resize', () => {
    boatImg.src = 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-cruise-breakfast-1-1100x734.jpg'
})

//(9) click
const btn = document.querySelectorAll('.btn')
console.log(btn)
btn[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'GoldenRod'
    event.target.style.color = 'DarkSlateGrey'
})
btn[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'Gainsboro'
    event.target.style.color = 'DarkSlateGrey'
})
btn[2].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'DodgerBlue'
    event.target.style.color = 'DarkSlateGrey'
})


//(10) mouse move
const backGround = document.querySelector('body')
backGround.addEventListener('mousemove', () => {
    backGround.style.backgroundColor = 'LemonChiffon'
})














