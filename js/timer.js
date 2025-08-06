// JavaScript 代码开始
var startTimer = function (targetEndTime) {
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    var diff = Math.max(0, targetEndTime - currentTimeInSeconds);

    displayTimerValues(diff);

    if (0 < diff) {
        setTimeout(function () {
            startTimer(targetEndTime);
        }, 1000);
    }
};

var displayTimerValues = function (diff) {
    var currentDays = Math.floor(diff / 86400);
    diff -= currentDays * 86400;

    var currentHours = Math.floor(diff / 3600) % 24;
    diff -= currentHours * 3600;

    var currentMinutes = Math.floor(diff / 60) % 60;
    diff -= currentMinutes * 60;

    var seconds = diff % 60;
    fillTimerValue("timerResultDays", currentDays);
    fillTimerValue("timerResultHours", currentHours);
    fillTimerValue("timerResultMinutes", currentMinutes);
    fillTimerValue("timerResultSeconds", seconds);
};

var fillTimerValue = function (elementName, value) {
    var element = document.getElementById(elementName);
    if (element) {
        element.innerHTML = (value < 10) ? "0" + value : value;
    }
};

// 设置规定的结束时间，例如：2024年1月1日 00:00:00 的时间戳
var targetEndTime = new Date("2025-10-01T00:00:00").getTime() / 1000;

// 开始倒计时
startTimer(targetEndTime);
// JavaScript 代码结束
