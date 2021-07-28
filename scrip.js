// READY //

const stopwatch = document.getElementById("stopwatch")
const playpauseButton = document.getElementById("play-pause")
const secondsSphere = document.getElementById("seconds-sphere")

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused= !playpauseButton.classList.contains("running");
    if (isPaused) {
        playpauseButton.classList.add("running")
        start();
    } else {
        playpauseButton.classList.remove("running");
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = "paused";
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = "rotate(-90deg) translateX(60px)";
    secondsSphere.style.animation = "none"
    playpauseButton.classList.remove("running");
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = "00:00";
}

const start = () => {
    secondsSphere.style.animation = "rotacion 1500 linear infinite"
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = "running";
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

//