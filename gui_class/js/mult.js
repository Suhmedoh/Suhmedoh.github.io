var horizValue1 = document.getElementById("horiz1").value;
var horizValue2 = document.getElementById("horiz2").value;
var vertiValue1 = document.getElementById("verti1").value;
var vertiValue2 = document.getElementById("verti2").value;
var arrayHoriz = new Array();
var arrayVerti = new Array();
var multTable;

function updateTable() {
  var table = document.getElementById('multTable');
  table.textContent = horizValue1 * v;

  for (i = horizValue1, j = 0; i < horizValue2; i++, j++) {
  	arrayHoriz[j] = i;
  }

  for (i = vertiValue1, j = 0; i < vertiValue2; i++, j++) {
  	arrayVerti[k] = i;
  }

  multTable = "<table><tr>";

  for (i = 0, j = 0; i <= arrayHoriz.len(); i++, j++) {
  	multTable += "<th> $arrayHoriz[j] </th>";
  }

  multTable += "</tr><tr>";

  for (i = 0, k = 0; i <= arrayVerti.len(); i++, k++) {
    for (i = 0, j = 0; i <= arrayHoriz.len(); i++, j++) {
      multTable += "<td> $arrayHoriz[j]*$arrayHoriz[k] </td>";
    }
  }

  	multTable += "</tr></table>";

    return false;
}


