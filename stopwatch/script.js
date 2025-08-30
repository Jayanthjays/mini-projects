let [miliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    miliSeconds++;

    if (miliSeconds == 100) { // 100 hundredths = 1 second
        miliSeconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds; // 2 digits

    displayTime.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10); // run every 10ms → 100 updates per sec
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [miliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:00";
}
