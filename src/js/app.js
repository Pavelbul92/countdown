const input = document.getElementById('datetime')
let seconds = null;

let countdown = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
}

function format(value){
    return (value < 10) ? `0${value}` : value;
}

setInterval(function () {
    seconds = new Date(input.value).getTime() / 1000 - new Date().getTime() / 1000;

    countdown.days = Math.floor(seconds / (24 * 60 * 60))
    countdown.hours = Math.floor((seconds - (countdown.days * 24 * 60 * 60)) / (60 * 60))
    countdown.minutes = Math.floor(((seconds - (countdown.days * 24 * 60 * 60)) - (countdown.hours * 60 * 60)) / 60)
    countdown.seconds = Math.floor(((seconds - (countdown.days * 24 * 60 * 60)) - (countdown.hours * 60 * 60)) - countdown.minutes * 60)

    document.querySelector('.days .digit').textContent = countdown.days ? format(countdown.days) : 0
    document.querySelector('.hours .digit').textContent = countdown.hours ? format(countdown.hours) : 0
    document.querySelector('.minutes .digit').textContent = countdown.minutes ? format(countdown.minutes) : 0
    document.querySelector('.seconds .digit').textContent = countdown.seconds ? format(countdown.seconds): 0

        console.log(countdown);
}, 1000)