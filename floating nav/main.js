var x = document.querySelector('span');
var body = document.querySelector('body')
var btn = document.querySelector('button')
var can = document.querySelector('nav')
var show = document.querySelector('.fa-bars')

x.addEventListener('click', function(e){
   can.style.display = "none"
})
show.addEventListener('click', function(e){
       can.style.display = "block"
    })
    


