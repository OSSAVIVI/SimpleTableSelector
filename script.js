function createTable() {
  //First, create the table element
  let tableJS = document.createElement('table');
  //Then, assign the table's attributes
  tableJS.setAttribute("id", "exampleTable");
  tableJS.style.width = '350px';
  tableJS.style.border = '5px solid blue';
  tableJS.style.textAlign = 'center';

  //Create the header row via insertion method insertRow()
  let tHRow = tableJS.insertRow();
  //Then, use a for loop to populate the row <tr> with <th>'s
  for (let index = 0; index < 4; index++) {
    let headerCell = document.createElement("th");
    headerCell.appendChild(document.createTextNode("Header " + (index + 1)));
    headerCell.style.border = '5px solid red';
    tHRow.appendChild(headerCell);
  }
  //Nest, use two for loops to populate 3 more rows, each with 4 <td>'s
  for (let index = 0; index < 3; index++) {
    let tDRow = tableJS.insertRow();
    for (let jndex = 0; jndex < 4; jndex++) {
      let tData = tDRow.insertCell();
      tData.appendChild(document.createTextNode((jndex + 1) + ', ' + (index + 1)));
      tData.style.border = '2px solid green';
      tData.style.fontSize = 'x-large';
      //tData.style.font = 'bold';
    }
  }
  //To display the table floating around in JS, we must append it to document.body by first letting bodyJs = document.body
  let bodyJS = document.body;
  bodyJS.appendChild(tableJS);


  //By default, the top left (non-header) cell will begin 'selected'
  let table = document.getElementById("exampleTable");
  let rowIndex = 1; //We will use this later on, too
  let cellIndex = 0; //We will use this later on, too
  table.rows[rowIndex].cells[cellIndex].style.border = '5px solid green';

  //Up Button code below...
  let upButton = document.createElement("input");
  //Define attribute type and value for up button
  //upButton.setAttribute("id", "upButton");
  upButton.type = "button";
  upButton.value = "Up";
  //document.getElementById("upButton").addEventListener("click", ) //couldnt get this to work
  upButton.onclick = function() { //coudlnt figure out how to addEventListener for click, had to use .onclick
    let current = table.rows[rowIndex].cells[cellIndex];
    if (rowIndex == 1) {
      current = current; //can't move past top header row
    } else {
      table.rows[rowIndex].cells[cellIndex].style.border = '2px solid green';
      rowIndex -= 1;
      current = table.rows[rowIndex].cells[cellIndex];
      current.style.border = '5px solid green';
    }
  };
  bodyJS.appendChild(upButton);

  //Down Button code below...
  let downButton = document.createElement("input");
  downButton.type = "button";
  downButton.value = "Down";
  downButton.name = "Down";
  downButton.onclick = function() {
    let current = table.rows[rowIndex].cells[cellIndex];
    if (rowIndex == 3) {
      current = current; //can't move past bottom header row
    } else {
      table.rows[rowIndex].cells[cellIndex].style.border = '2px solid green';
      rowIndex += 1;
      current = table.rows[rowIndex].cells[cellIndex];
      current.style.border = '5px solid green';
    }
  };
  bodyJS.appendChild(downButton);
  
  //Left Button code below...
  let leftButton = document.createElement("input");
  leftButton.type = "button";
  leftButton.value = "Left";
  leftButton.name = "Left";
  leftButton.onclick = function() {
    let current = table.rows[rowIndex].cells[cellIndex];
    if (cellIndex == 0) {
      current = current; //can't move past the left border of table
    } else {
      table.rows[rowIndex].cells[cellIndex].style.border = '2px solid green';
      cellIndex -= 1;
      current = table.rows[rowIndex].cells[cellIndex];
      current.style.border = '5px solid green';
    }
  };
  bodyJS.appendChild(leftButton);

  //Right Button code below...
  let rightButton = document.createElement("input");
  rightButton.type = "button";
  rightButton.value = "Right";
  rightButton.name = "Right";
  rightButton.onclick = function() {
    var current = table.rows[rowIndex].cells[cellIndex];
    if (cellIndex == 3) {
      current = current;
    } else {
      table.rows[rowIndex].cells[cellIndex].style.border = '2px solid green';
      cellIndex = cellIndex + 1;
      current = table.rows[rowIndex].cells[cellIndex];
      current.style.border = '5px solid green';
    }
  };
  bodyJS.appendChild(rightButton);
  
  //Mark Button code below...
  var markButton = document.createElement("input");
  markButton.type = "button";
  markButton.value = "markButton";
  markButton.name = "markButton";
  //Change background color
  markButton.onclick = function() {
    table.rows[rowIndex].cells[cellIndex].style.backgroundColor = 'yellow';
  };
  bodyJS.appendChild(markButton);
}
//this code calls the createTable() function after DOMContent has loaded...
document.addEventListener('DOMContentLoaded', createTable());
