

// display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('ddd MMM D, YYYY'));

$(function () {

  $(".saveBtn").on('click', function () {
  // gets hour and input data  
    var formInput = $(this).siblings(".description").val();
    var hourSlot = $(this).parent().attr("id");
  // save to local storage  
    localStorage.setItem(hourSlot, formInput);


  });
  // retrieve from local storage  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    
 
  
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
});