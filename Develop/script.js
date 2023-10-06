// display date and time
$(document).ready(function () {
    var time = document.querySelector("#currentDay");
    var timeNow = dayjs().format("dddd, MMMM D, YYYY");
    time.textContent = timeNow;
 //get user input and save in local storage
$(".saveBtn").on("click", function() {
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(text, time);
  });  
})