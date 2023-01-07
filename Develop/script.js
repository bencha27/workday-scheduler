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
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
