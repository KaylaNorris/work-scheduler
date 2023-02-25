// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //*WORK IN PROGRESS* save function 
  // $(".saveBtn").on('click', function () {
  // // gets hour and input data  
  //   var formInput = $(this).siblings(".description").val;
  //   var hourSlot = $(this).parent().attr("id");
  // // save to local storage  
  //   localStorage.setItem(hourSlot, formInput);
  // // retrieve from local storage  
  // $(formInput).val(localStorage.getItem("hour-9"));
  //   });
 
  //
  //  loop to get color coded time blocks
function timeKeeper() {
  var currentTime = today.hour();

  $(".time-block").each(function () {
    // loop through time blocks
    var hourSlot = parseInt($(this).attr("id").split("hour-")[1]);

    if (hourSlot < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (hourSlot === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  })
  };   
  
  timeKeeper();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  //
});