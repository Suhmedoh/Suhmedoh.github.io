

function updateTable() {
  var horizValue1 = document.getElementById("horiz1").value;
  var horizValue2 = document.getElementById("horiz2").value;
  var vertiValue1 = document.getElementById("verti1").value;
  var vertiValue2 = document.getElementById("verti2").value;
  var arrayHoriz = new Array();
  var arrayVerti = new Array();
  var multTable;
  var table = document.getElementById('multTable');

  for (i = horizValue1, j = 0; i <= horizValue2; i++, j++) {
  	arrayHoriz[j] = i;
  }

  for (i = vertiValue1, k = 0; i <= vertiValue2; i++, k++) {
  	arrayVerti[k] = i;
  }

  multTable = "<table><tr><td>&nbsp;</td>";

  for (i = 0; i <= arrayHoriz.length; i++) {
  	multTable += "<td>" + arrayHoriz[i] + " </td>";
  }

  multTable += "</tr><tr>";

  for (i = 0; i < arrayVerti.length; i++) {
    multTable += "<td>" + arrayVerti[k] + "</td>";
    for (j = 0; j < arrayHoriz.length; j++) {
      console.log("ah*av=" + arrayHoriz[j]*arrayVerti[i])
      multTable += "<td>" + arrayHoriz[j]*arrayVerti[i] + "</td>";
    }
    multTable += "</tr><tr>"
  }


  multTable += "</tr></table>";

  document.getElementById("table").innerHTML = multTable;

  return false;
}


