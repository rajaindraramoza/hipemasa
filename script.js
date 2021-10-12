const dd = document.getElementById("day");
const hh = document.getElementById("hour");
const mm = document.getElementById("minute");
const ss = document.getElementById("second");

let timeCount = setInterval(() => {

    let curntTime = Date.now();
    let eventTime = new Date('October 23, 2021 00:00:00').getTime();

    totalTime = (eventTime - curntTime) / 1000; //total seconds

    let dayConst = 86400;
    let hourConst = 3600;
    let minuteConst = 60;

    let days = Math.floor(totalTime / dayConst);
    totalTime = totalTime % dayConst;

    let hours = Math.floor(totalTime / hourConst);
    totalTime = totalTime % hourConst;

    let minutes = Math.floor(totalTime / minuteConst);
    totalTime = totalTime % minuteConst;

    let seconds = Math.floor(totalTime);

    if (totalTime < 0) {
        clearInterval(timeCount);

        days = '00';
        hours = '00';
        minutes = '00';
        seconds = '00';
    }

    dd.textContent = days;
    hh.textContent = hours;
    mm.textContent = minutes;
    ss.textContent = seconds;

}, 1000);