// ADD NEW ITEM TO END OF LIST
function addLast() {
  var unorderedList = document.getElementsByTagName("ul")[0];
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("cream"));
  unorderedList.appendChild(listItem);
}

addLast();

// ADD NEW ITEM START OF LIST
function addFirst() {
  var unorderedList = document.getElementsByTagName("ul")[0];
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("kale"));
  unorderedList.insertBefore(listItem, unorderedList.childNodes[0]);
}

addFirst();

// ADD A CLASS OF COOL TO ALL LIST ITEMS

function addCool() {
  var unorderedList = document.getElementsByTagName("ul")[0];
  var ul = document.getElementsByTagName("ul")[0].childNodes.length / 2;
  console.log(document.getElementsByTagName("li")[6]);
  for (i = 0; i <= ul; i++) {
	document.getElementsByTagName("li")[i].setAttribute("class", "cool");
  }
}

addCool();

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

function addNumber() {
  var unorderedList = document.getElementsByTagName("ul")[0];
  var ulLength = document.getElementsByTagName("ul")[0].childNodes.length;
  var header = document.getElementsByTagName("h2")[0];
  var newText = document.createElement("span");
  console.log(document.getElementsByTagName("ul")[0].childNodes);
  newText.appendChild(document.createTextNode(ulLength / 2));
  header.appendChild(newText);
}

addNumber()