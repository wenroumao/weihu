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

function startTimer(targetEndTime) {
    function update() {
        const now = Math.floor(Date.now() / 1000);
        let diff = Math.max(0, targetEndTime - now);
        displayTimerValues(diff);

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
startTimer(targetEndTime);