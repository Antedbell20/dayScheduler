// display date and time
$(document).ready(function () {
    var time = document.querySelector("#currentDay");
    var timeNow = dayjs().format("dddd, MMMM D, YYYY");
    time.textContent = timeNow;
})