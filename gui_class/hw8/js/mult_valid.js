//Joshua Semedo
//01516816
//11/22/2016, UMass Lowell
//create a multiplication table with jquery ui sliders and tabs

//create a function which creates and updates the table
var errorbit = 0;
var tabCount = 1;
var tableBuffer = 0;
var tempTable;
var tabId = 0;
var multTable;
var dTab;
var tabsToDelete;
function updateTable() {
  //declare all necessar variables
  var hv1 = document.getElementById("horiz1").value;
  var hv2 = document.getElementById("horiz2").value;
  var vv1 = document.getElementById("verti1").value;
  var vv2 = document.getElementById("verti2").value;
  var arrayHoriz = new Array();
  var arrayVerti = new Array();
  var error;
  var table = document.getElementById('multTable');
  //turn input into ints
  var horizValue1 = parseInt(hv1);
  var horizValue2 = parseInt(hv2);
  var vertiValue1 = parseInt(vv1);
  var vertiValue2 = parseInt(vv2);

  //handling errors
  if ((horizValue1 == horizValue2) || (vertiValue1 == vertiValue2)) {
    $("error").css({'display' : 'block'});
    error = "The starting and ending range values can not be the same";
    document.getElementById("error").innerHTML = error;
    errorbit = 1;
  }

  else if ((horizValue1 > horizValue2) || (vertiValue1 > vertiValue2)) {
    $("error").css({'display' : 'block'});
    error = "Please enter an increasing range, from smaller number to bigger";
    document.getElementById("error").innerHTML = error;
    errorbit = 1;

  }

  //if no errors, start generating the tables
  else {
    errorbit = 0;
    //for loops to establish the ranges on the table
    for (i = horizValue1, j = 0; i <= horizValue2; i++, j++) {
      arrayHoriz[j] = i;
    }

    for (i = vertiValue1, k = 0; i <= vertiValue2; i++, k++) {
      arrayVerti[k] = i;
    }

    //create a variable which holds the html that generates the table
    multTable = "<table><tr><td>&nbsp;</td>";

    for (i = 0; i <= arrayHoriz.length - 1; i++) {
      multTable += "<td>" + arrayHoriz[i] + " </td>";
    }

    multTable += "</tr><tr>";

    //this is the part that generates the actual multiplied numbers
    for (i = 0, k = 0; i <= arrayVerti.length - 1; i++, k++) {
      multTable += "<td>" + arrayVerti[i] + "</td>";
      for (j = 0; j <= arrayHoriz.length - 1; j++) {
        multTable += "<td>" + arrayHoriz[j]*arrayVerti[i] + "</td>";
      }
      multTable += "</tr><tr>"
    }


    multTable += "</tr></table>";

    //this replaces the content in the element with the id "table", with the contents of the variable multTable
    document.getElementById("t0").innerHTML = multTable;
  }

  //return false to stop page refresh
  return false;
}

//validation checker, so it won't attempt to submit the form if there are errors
function checkErr() {
  if (errorbit == 0) {
    $("error").css({'display' : 'block'});
    $("#error").text("");
    return updateTable();
  }
  else {
    $("error").css({'display' : 'block'});
    errorbit = 1;
    return updateTable();
  }
}

//tabs stuff
$(function(){
  $("#table").tabs();
});

//save tabs (edited from stack overflow)
function saveTable() {
  $("div#table ul").append(
      "<li id='ta" + tabCount + "'><a href='#t" + tabCount + "'>#" + tabCount + "</a></li>"
  );
  $("div#table").append(
      "<div id='t" + tabCount + "'>#" + tabCount + "</div>"
  );
  $("div#table").tabs("refresh");
  tempTable = multTable;
  document.getElementById("t" + tabCount).innerHTML = tempTable;
  tabCount = tabCount + 1;
  updateTable();                   
};

//delete tabs (edited from stack overflow)
function deleteTab() {
  dTab = $("#tabDelete").val();
  $("#t" + dTab).remove();
  $("#ta" + dTab).remove();
  $("div#table").tabs("refresh");              
  return false;
}

//delete multiple tabs
function multiDelete() {
  tabsToDelete = $("#tabDelete").val().split(',');
  for(i = 0; i < tabsToDelete.length; i++) {
    $("#t" + tabsToDelete[i]).remove();
    $("#ta" + tabsToDelete[i]).remove();
    $("div#table").tabs("refresh");
  }
  return false;
}

//use stack overflow to figure out how to set rules
$(document).ready(function(){
  $.validator.setDefaults({
    ignore: []
  });
  var validator = $('#multTable').validate({
    rules: {
      horiz1: {
        required: true,
        number: true,
        min: -10,
        max: 10,
      },
      horiz2: {
        required: true,
        number: true,
        min: -10,
        max: 10,
      },
      verti1: {
        required: true,
        number: true,
        min: -10,
        max: 10,
      },
      verti2: {
        required: true,
        number: true,
        min: -10,
        max: 10,
      }
    },
    //validation messages for each input box
    messages: {
      horiz1: {
        required: "Box 1: Enter a number.",
        number: "Box 1: Enter a valid number.",
        min: "Box 1: No numbers lower than -10.",
        max: "Box 1: No numbers greater than 10."
      },
      horiz2: {
        required: "Box 2: Enter a number.",
        number: "Box 2:Enter a valid number.",
        min: "Box 2: No numbers lower than -10.",
        max: "Box 2: No numbers greater than 10."
      },
      verti1: {
        required: "Box 3: Enter a number.",
        number: "Box 3: Enter a valid number.",
        min: "Box 3: No numbers lower than -10.",
        max: "Box 3: No numbers greater than 10."
      },
      verti2: {
        required: "Box 4: Enter a number.",
        number: "Box 4: Enter a valid number.",
        min: "Box 4: No numbers lower than -10.",
        max: "Box 4: No numbers greater than 10."
      }
    },
    errorElement : 'div',
    errorLabelContainer: '#error',
    submitHandler: function(form) {
    }
  });


  //slider stuff (used jquery ui documentation)
  $( function() {
    $("#slider1").slider({
      min: -10,
      max : 10,
      value: 0,
      slide: function( event, ui) {
        $("#horiz1").val(ui.value);
        checkErr();
      }
    });
  });

  $( function() {
    $("#slider2").slider({
      min: -10,
      max : 10,
      value: 0,
      slide: function( event, ui) {
        $("#horiz2").val(ui.value);
        checkErr();
      },
      refresh : true
    });
  });
  $( function() {
    $("#slider3").slider({
      min: -10,
      max : 10,
      value: 0,
      slide: function( event, ui) {
        $("#verti1").val(ui.value);
        checkErr();
      }
    });
  });
  $( function() {
    $("#slider4").slider({
      min: -10,
      max : 10,
      value: 0,
      slide: function( event, ui) {
        $("#verti2").val(ui.value);
        checkErr();
      }
    });
  });
  //update table when text entered
  $("#horiz1").on('input', function(){
    checkErr();
  });
  $("#horiz2").on('input', function(){
    checkErr();
  });
  $("#verti1").on('input', function(){
    checkErr();
  });
  $("#verti2").on('input', function(){
    checkErr();
  });

  //ui/ux stuff
  $("#horiz1").mouseenter(function(){
    $('#horiz1').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#e28e7f',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 3,
      'border-left-style': 'solid',
      'border-left-width': 3,
      'border-top-style': 'solid',
      'border-top-width': 1,
      'border-bottom-style': 'solid',
      'border-bottom-width': 1,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s' 
    });
  }); 
  $('#horiz1').mouseleave(function(){
    $('#horiz1').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#778a53',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 7,
      'border-left-style': 'solid',
      'border-left-width': 7,
      'border-top-style': 'solid',
      'border-top-width': 2,
      'border-bottom-style': 'solid',
      'border-bottom-width': 2,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s'
    });
  });
  $("#horiz2").mouseenter(function(){
    $('#horiz2').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#e28e7f',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 3,
      'border-left-style': 'solid',
      'border-left-width': 3,
      'border-top-style': 'solid',
      'border-top-width': 1,
      'border-bottom-style': 'solid',
      'border-bottom-width': 1,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s' 
    });
  }); 
  $('#horiz2').mouseleave(function(){
    $('#horiz2').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#778a53',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 7,
      'border-left-style': 'solid',
      'border-left-width': 7,
      'border-top-style': 'solid',
      'border-top-width': 2,
      'border-bottom-style': 'solid',
      'border-bottom-width': 2,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s'
    });
  });
  $("#verti1").mouseenter(function(){
    $('#verti1').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#e28e7f',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 3,
      'border-left-style': 'solid',
      'border-left-width': 3,
      'border-top-style': 'solid',
      'border-top-width': 1,
      'border-bottom-style': 'solid',
      'border-bottom-width': 1,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s' 
    });
  }); 
  $('#verti1').mouseleave(function(){
    $('#verti1').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#778a53',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 7,
      'border-left-style': 'solid',
      'border-left-width': 7,
      'border-top-style': 'solid',
      'border-top-width': 2,
      'border-bottom-style': 'solid',
      'border-bottom-width': 2,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s'
    });
  });
  $("#verti2").mouseenter(function(){
    $('#verti2').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#e28e7f',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 3,
      'border-left-style': 'solid',
      'border-left-width': 3,
      'border-top-style': 'solid',
      'border-top-width': 1,
      'border-bottom-style': 'solid',
      'border-bottom-width': 1,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s' 
    });
  }); 
  $('#verti2').mouseleave(function(){
    $('#verti2').css({
      'font-family': 'Dosis',
      'display': 'inline-block',
      'padding': 0,
      'width': 100,
      'height': 50,
      'background-color': 'transparent',
      'border-color': '#778a53',
      'border-radius': 1,
      'border-right-style': 'solid',
      'border-right-width': 7,
      'border-left-style': 'solid',
      'border-left-width': 7,
      'border-top-style': 'solid',
      'border-top-width': 2,
      'border-bottom-style': 'solid',
      'border-bottom-width': 2,
      'text-align': 'center',
      'font-size': 18,
      'transition-duration': '.3s'
    });
  });
});