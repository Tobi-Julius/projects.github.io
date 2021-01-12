const bttnBars = document.querySelector('.fa-bars')
const body = document.querySelector('body')
const bttnTimes = document.querySelector('.fa-times')


bttnBars.addEventListener ('click', function(e){
    body.classList.toggle('open')
})
bttnTimes.addEventListener('click', function(e){
    body.classList.remove('open')
});
