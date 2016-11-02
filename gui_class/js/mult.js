//Joshua Semedo
//01516816
//11/2/2016, UMass Lowell

//create a function which creates and updates the table
function updateTable() {
  //declare all necessar variables
  var horizValue1 = document.getElementById("horiz1").value;
  var horizValue2 = document.getElementById("horiz2").value;
  var vertiValue1 = document.getElementById("verti1").value;
  var vertiValue2 = document.getElementById("verti2").value;
  var arrayHoriz = new Array();
  var arrayVerti = new Array();
  var multTable;
  var error;
  var table = document.getElementById('multTable');

  //handling errors
  if ((horizValue1 == horizValue2) || (vertiValue1 == vertiValue2)) {
    error = "The starting and ending range values can not be the same";
    document.getElementById("table").innerHTML = error;
  }

  else if ((horizValue1 > horizValue2) || (vertiValue1 > vertiValue2)) {
    error = "Please enter an increasing range, from smaller number to bigger";
    document.getElementById("table").innerHTML = error;
  }

  else if (((horizValue2 - horizValue1) > 20) || ((vertiValue2 - vertiValue1) > 20)) {
    error = "Please make sure the different between the two numbers in either range is 20 or less";
    document.getElementById("table").innerHTML = error;
  }

  //if no errors, start generating the tables
  else {
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
    document.getElementById("table").innerHTML = multTable;
  }

  //return false to stop page refresh
  return false;
}


