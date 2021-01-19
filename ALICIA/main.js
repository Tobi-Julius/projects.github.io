const btnTog = document.querySelector('.toggle-btn')
const body = document.querySelector('body')


btnTog.addEventListener('click', function(e){
    body.classList.toggle('open')
})

// var imag = document.querySelector('.uni-img')

// var i = 0;
// var images = [];
// var time = 5000;

// // image list
// images[0] = 'images/unibg.jpg';
// images[1] = 'images/unibg2.jpg';
// images[2] = 'images/unibg3.jpg';

// function changeImg () {
//     document.slide.src = images[i];
//     if (i < images.length - 1) {
//         i++
//     } else {
//         i = 0
//     }
//     setTimeout ('changeImg()', time)
// }

// window.onload = changeImg;
