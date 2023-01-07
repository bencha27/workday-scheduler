// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var now = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(now);
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $(".saveBtn").click(function() {
    var hour = $(this).parent().attr("id");
    var event = $(this).prev().val();
    localStorage.setItem(hour, event);
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  timeBlockArray.each(function() {
    var hourKey = $(this).attr("id");
    var savedEvent = localStorage.getItem(hourKey);
    $(this).children("textarea").val(savedEvent);
  })
});
