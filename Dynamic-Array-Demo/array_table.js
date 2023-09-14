// Define an array of objects with data
let data = [
{ name: "Izuku Midoriya", anime: "My Hero Academia"},
{ name: "Natsu Dragneel", anime: "Fairy Tail" },
{ name: "Naruto Uzumaki", anime: "Naruto" },
{ name: "Asta", anime: "Black Clover" },
{ name: "Shinra Kusakabe", anime: "Fire Force" }
];

// Create a new HTML table element
const table = document.createElement("table");
table.className = "table_1"; // Apply CSS class "table_1" to the table

// Create table header row
const headerRow = document.createElement("tr");
for (const key in data[0]) 
{
  const headerCell = document.createElement("th"); // Create a table header cell
  headerCell.className = "table_header"; // Apply CSS class "table_header" to the header cell
  headerCell.textContent = key;  // Set the text content of the header cell to the key
  headerRow.appendChild(headerCell); // Append the header cell to the header row
}
table.appendChild(headerRow); // Append the header row to the table


// Create table body with data rows
for (let i = 0; i < data.length; i++) 
{
  const row = document.createElement("tr");  // Create a table row for each data entry
    for (const key in data[i]) 
    {
      const cell = document.createElement("td"); // Create a table cell for each data value
      cell.className = "table_cell" // Apply CSS class "table_cell" to the cell
      cell.textContent = data[i][key]; // Set the cell's text content to the corresponding data value
      row.appendChild(cell); // Append the cell to the row
    }
  table.appendChild(row); // Append the row to the table
}

document.body.appendChild(table); // Append the table to the document's body
