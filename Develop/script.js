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
 //sets background colors based off the current time 
function tracker() {
    var currentHr = dayjs().hour();
    $(".time-block").each(function() {
      var blockHr = parseInt($(this).attr("id").split("-")[1]);
      if(blockHr < currentHr) {
        $(this).addClass("past");
      } else if (blockHr === currentHr) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    }); 
})