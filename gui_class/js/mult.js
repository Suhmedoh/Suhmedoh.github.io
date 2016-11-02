

function updateTable() {
  var horizValue1 = document.getElementById("horiz1").value;
  var horizValue2 = document.getElementById("horiz2").value;
  var vertiValue1 = document.getElementById("verti1").value;
  var vertiValue2 = document.getElementById("verti2").value;
  var arrayHoriz = new Array();
  var arrayVerti = new Array();
  var multTable;
  var error;
  var table = document.getElementById('multTable');

  if ((horizValue1 == horizValue2) || (vertiValue1 == vertiValue2)) {
    error = "The starting and ending range values can not be the same";
    document.getElementById("table").innerHTML = error;
  }

  else if ((horizValue1 > horizValue2) || (vertiValue1 > vertiValue2)) {
    error = "Please enter an increasing range, from smaller number to bigger";
    document.getElementById("table").innerHTML = error;
  }

  else if (((horizValue2 - horizValue1) > 10) || ((vertiValue2 - vertiValue1) > 10)) {
    error = "Please make sure the different between the two numbers in either range is 10 or less";
    document.getElementById("table").innerHTML = error;
  }

  else {

    for (i = horizValue1, j = 0; i <= horizValue2; i++, j++) {
    	arrayHoriz[j] = i;
    }

    for (i = vertiValue1, k = 0; i <= vertiValue2; i++, k++) {
    	arrayVerti[k] = i;
    }

    multTable = "<table><tr><td>&nbsp;</td>";

    for (i = 0; i <= arrayHoriz.length - 1; i++) {
    	multTable += "<td>" + arrayHoriz[i] + " </td>";
    }

    multTable += "</tr><tr>";

    for (i = 0, k = 0; i <= arrayVerti.length - 1; i++, k++) {
      multTable += "<td>" + arrayVerti[i] + "</td>";
      for (j = 0; j <= arrayHoriz.length - 1; j++) {
        console.log("ah*av=" + arrayHoriz[j]*arrayVerti[i])
        multTable += "<td>" + arrayHoriz[j]*arrayVerti[i] + "</td>";
      }
      multTable += "</tr><tr>"
    }


    multTable += "</tr></table>";

    document.getElementById("table").innerHTML = multTable;
  }

  return false;
}


