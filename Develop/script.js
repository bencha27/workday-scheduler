$(function () {
  var now = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(now);
  
  var currentHour = dayjs().format("H");
  var timeBlockArray = $("#schedule").children();
  timeBlockArray.each(function() {
    if ($(this).data("hour") < currentHour) {
      $(this).addClass("past");
    } else if ($(this).data("hour") == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })

  $(".saveBtn").click(function() {
    var hour = $(this).parent().attr("id");
    var event = $(this).prev().val();
    localStorage.setItem(hour, event);
  })

  timeBlockArray.each(function() {
    var hourKey = $(this).attr("id");
    var savedEvent = localStorage.getItem(hourKey);
    $(this).children("textarea").val(savedEvent);
  })
});
