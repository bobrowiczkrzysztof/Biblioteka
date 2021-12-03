let arr = new Array();
function addData(event) {
  event.preventDefault();
  getData();
  arr.push({
    tytul: document.getElementById('tytul').value,
    autor: document.getElementById('autor').value,
    priorytet: document.getElementById('priorytet').value,
    kategoria: document.getElementById('kategoria').value,
  });
  localStorage.setItem('localData', JSON.stringify(arr));
  showData();
}

function getData() {
  let str = localStorage.getItem('localData');
  if (str !== null) {
    arr = JSON.parse(str);
  }
}

function deleteData() {
  localStorage.clear();
}

function showData() {
  getData();
  let table = document.getElementById('table');
  // Prevent multiplication when adding new book
  let x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }
  for (i = 0; i < arr.length; i++) {
    let row = table.insertRow();
    // Insert Cells
    const tytulCell = row.insertCell();
    const autorCell = row.insertCell();
    const priorytetCell = row.insertCell();
    const kategoriaCell = row.insertCell();
    // Insert data from HTML Form
    tytulCell.innerHTML = arr[i].tytul;
    autorCell.innerHTML = arr[i].autor;
    priorytetCell.innerHTML = arr[i].priorytet;
    kategoriaCell.innerHTML = arr[i].kategoria;
    // Clear inputs
    tytul.value = '';
    autor.value = '';
    priorytet.value = '';
    kategoria.value = '';
  }
}

showData();
