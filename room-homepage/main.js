var menuTog1 = document.querySelector('#bars1')
var show = document.querySelector('body')

var left = document.getElementById('left')

var right = document.getElementById('right')

var times1 = document.getElementById('close1')

var con1 = document.getElementById('con-1')

var con3 = document.getElementById('con-3')

var con4 = document.getElementById('con-4')


menuTog1.addEventListener('click', function(e){
    show.classList.toggle('open')
})

times1.addEventListener('click', function(e){
    show.classList.remove('open')
})

right.addEventListener('click', function(e){
    console.log(4)
    con1.style.display = 'none'
    con3.style.display = 'grid'
    con4.style.display = 'none'

})
var r4 = document.querySelector('.woo')

r4.addEventListener('dblclick', function(e){
    con1.style.display = 'none'
    con3.style.display = 'none'
    con4.style.display = 'grid'
    // console.log(5)
})









var times3 = document.getElementById('close3')
var menuTog3 = document.querySelector('#bars3')
menuTog3.addEventListener('click', function(e){
    show.classList.toggle('open')
})

times3.addEventListener('click', function(e){
    show.classList.remove('open')
    console.log(1)
})
var times4 = document.getElementById('close4')
var menuTog4 = document.querySelector('#bars4')
menuTog4.addEventListener('click', function(e){
    show.classList.toggle('open')
})

times4.addEventListener('click', function(e){
    show.classList.remove('open')
    console.log(1)
})