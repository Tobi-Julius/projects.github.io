var countDownDate = new Date ('may 21, 2022 23:59:59').getTime();

var updateSecond = setInterval(function(){

    var now = new Date().getTime()

    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 *24));

    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) /(1000 * 60 * 60));

    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));

    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById('day').innerText = days

    document.getElementById('hour').innerText = hours

    document.getElementById('minute').innerText = minutes

    document.getElementById('second').innerText = seconds

    if (distance < 1){
        clearInterval(updateSecond);
        document.getElementById('day').innerHTML = 'EX'
        document.getElementById('hour').innerHTML = 'PI'
        document.getElementById('minute').innerHTML = 'RE'
        document.getElementById('second').innerHTML = 'D';
    }


}, 1000);








