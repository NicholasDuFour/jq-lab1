"use strict";
$("document").ready(()=>{

  let counter = 0;

//   const resList = [
//     {
//     Name: "Yasmine",
//     Phone Number: 555-1212,
//     Party Size: 10,
//     Table: 1
//     }
// ];

  $("form").hide(); //Hides the form upon initial load;


// Test for toggling the form on the individual tables, change this later
  $("#1").click(function () {
    $("form").toggle()
  });
  $("#2").click(function () {
    $("form").toggle();
  });
  $("#3").click(function () {
    $("form").toggle();
  });
  $("#4").click(function () {
    $("form").toggle();
  });
  $("#5").click(function () {
    $("form").toggle();
  });
  $("#6").click(function () {
    $("form").toggle();
  });
  $("#7").click(function () {
    $("form").toggle();
  });
  $("#8").click(function () {
    $("form").toggle();
  });
  $("#9").click(function () {
    $("form").toggle();
  });

  $("button").click(function (){
    $("form").hide()
    $("#1").toggleClass("reserved");
    // update reservations list
    // resList.push({
    //   Name:$("name").val(),
    //   Phone:$("phoneNumber").val(),
    //   Party Size:$("partySize").val(),
    //   Table:$("").val()
    // })

  });

  $(".material-icons").click(function () {
    $("form").hide();
  })













});
