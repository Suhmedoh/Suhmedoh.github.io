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
  var j = 0;
  var k = 0;
  for (i = horizValue1; i < horizValue2; i++) {
  	arrayHoriz[j] = i;
  	j++;
  }
  for (i = vertiValue1; i < vertiValue2; i++) {
  	arrayVerti[k] = i;
  	k++;
  }

  multTable = "<table><tr>";
  j = 0;

  for (i = 0; i <= arrayHoriz.len(); i++) {
  	multTable += "<th> $arrayHoriz[j] </th>"
  	j++;
  }

  multTable += "</tr><tr>"

for (i = 0; i <= arrayHoriz.len(); i++) {
  	multTable += "<td> $arrayHoriz[j] </th>"
  	j++;
  }


}

// Call the function
updateMessage();
