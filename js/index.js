// Your code goes here

//(1)double click
const heading = document.querySelector('.logo-heading')
heading.addEventListener('dblclick', (event) => {
    event.target.style.color = 'pink'
})

//(2) mouse over
const funBus = document.querySelector('.intro img')
console.log(funBus);
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.2)'
    funBus.style.transition = 'all 0.3s'
})

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1.0)'
})

//(4) zoom
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    //restricting scale
    scale = Math.min(Math.max(.125, scale) ,2);

    //applying scale transform
    introHead.style.transform = `scale(${scale})`
}

let scale = -.2;


const introHead = document.querySelector('.intro h2')
introHead.onwheel = zoom;

//(5/6) focus / blur - still having issue with this one                              
const destination = document.querySelector('.content-destination')
destination.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow'
});
destination.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

//(7) resize
const boatImg = document.querySelector('.content-destination img')
window.addEventListener('resize', () => {
    boatImg.src = 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-cruise-breakfast-1-1100x734.jpg'
})

//(8)click

const button = document.querySelectorAll('.btn')
console.log(button)
button[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow'
})





//(9)




//(10)







