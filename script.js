const startButton = document.getElementsByClassName('startButton')[0];
const stopButton = document.getElementsByClassName('stopButton')[0];
const continueButton = document.getElementsByClassName('continueButton')[0];
const restartButton = document.getElementsByClassName('restartButton')[0];
const miniSecondTag = document.getElementsByClassName('miniSecond')[0];
const stopwatch = document.getElementsByClassName('stopwatch')[0];

let seconds = 0, minutes = 0, hours = 0, miniSeconds = 0;

const start = () => {
    miniSeconds += 10;
    if(miniSeconds === 1000){
        miniSeconds = 0;
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minutes += 1;
            if(minutes === 60){
                minutes = 0;
                hours += 1;
            }
        }
    }
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
    const hourText = hours < 10 ? '0' + hours.toString() : hours;
    stopwatch.textContent = hourText + ':' + minuteText + ':' + secondText;
    miniSecondTag.textContent = miniSeconds;
}

let setIntervalId;
startButton.addEventListener('click', () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(start,10);
})

stopButton.addEventListener('click', () => {
    clearInterval(setIntervalId);
});

continueButton.addEventListener('click', () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(start,10);
})

restartButton.addEventListener('click', () => {
    seconds = 0, minutes = 0, hours = 0;
    stopwatch.textContent = '00:00:00';
    miniSecondTag.textContent = '000';
})