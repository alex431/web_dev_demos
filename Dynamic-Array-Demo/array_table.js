let data = [
{ name: "Izuku Midoriya", anime: "My Hero Academia"},
{ name: "Natsu Dragneel", anime: "Fairy Tail" },
{ name: "Naruto Uzumaki", anime: "Naruto" },
{ name: "Asta", anime: "Black Clover" },
{ name: "Shinra Kusakabe", anime: "Fire Force" }
];

const table = document.createElement("table");
table.className = "table_1";

// Create table header
const headerRow = document.createElement("tr");
for (const key in data[0]) 
{
  const headerCell = document.createElement("th");
  headerCell.className = "table_header"
  headerCell.textContent = key;
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);


// Create table body
for (let i = 0; i < data.length; i++) 
{
  const row = document.createElement("tr");
    for (const key in data[i]) 
    {
      const cell = document.createElement("td");
      cell.className = "table_cell"
      cell.textContent = data[i][key];
      row.appendChild(cell);
    }
  table.appendChild(row);
}

document.body.appendChild(table);
