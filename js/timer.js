// 倒计时带动画特效优化版

const timerIds = ["timerResultDays", "timerResultHours", "timerResultMinutes", "timerResultSeconds"];
let lastValues = [null, null, null, null];
let timerInterval = null;

function animateChange(element) {
    element.classList.remove("timer-animate");
    // 触发重绘以重置动画
    void element.offsetWidth;
    element.classList.add("timer-animate");
}

function displayTimerValues(diff) {
    let days = Math.floor(diff / 86400);
    diff -= days * 86400;
    let hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    let minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    let seconds = diff % 60;

    const values = [days, hours, minutes, seconds];

    values.forEach((val, idx) => {
        const el = document.getElementById(timerIds[idx]);
        if (el && lastValues[idx] !== val) {
            el.textContent = val < 10 ? "0" + val : val;
            animateChange(el);
            lastValues[idx] = val;
        }
    });
}

<<<<<<< HEAD
=======
function heartbeatSync() {
    const h1 = document.querySelector('.heartbeat');
    if (h1) {
        h1.classList.remove('heartbeat-animate');
        void h1.offsetWidth;
        h1.classList.add('heartbeat-animate');
    }
}

>>>>>>> 66c4caa (更新了主页文字发光)
function startTimer(targetEndTime) {
    function update() {
        const now = Math.floor(Date.now() / 1000);
        let diff = Math.max(0, targetEndTime - now);
        displayTimerValues(diff);
<<<<<<< HEAD

=======
        heartbeatSync();
>>>>>>> 66c4caa (更新了主页文字发光)
        if (diff === 0) {
            clearInterval(timerInterval);
            showEndEffect();
        }
    }
    update();
    timerInterval = setInterval(update, 1000);
}

function showEndEffect() {
    const timerSection = document.querySelector('.timer');
    if (timerSection) {
        timerSection.classList.add('timer-end-animate');
        timerSection.innerHTML = `<div class="timer-end-text">倒计时已结束</div>`;
    }
}

// 设置结束时间
const targetEndTime = new Date("2025-10-01T00:00:00").getTime() / 1000;
<<<<<<< HEAD
startTimer(targetEndTime);
=======
startTimer(targetEndTime);
>>>>>>> 66c4caa (更新了主页文字发光)
