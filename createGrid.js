// Function to add a row to the grid
function addRow() {
    // go to grid container 
    const gridContainer = document.getElementById('grid-container');
    const cols = gridContainer.firstChild ? gridContainer.firstChild.children.length : 1;

    const newRow = document.createElement('div');
    newRow.classList.add('grid-row');

    for (let i = 0; i < cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        // Attach the colorCell event listener (Fixed the issue)
        cell.addEventListener('click', colorCell); 
        newRow.appendChild(cell);
    }

    gridContainer.appendChild(newRow);
}

// Function to add a column to the grid
function addCol() {
    // go to grid container
    const gridContainer = document.getElementById('grid-container');
    // get all the rows
    const rows = gridContainer.children;

     // Add a new cell to each column
    for (let i = 0; i < rows.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        // Attach the colorCell event listener -> when you add it adds that instance 
        cell.addEventListener('click', colorCell); 
        rows[i].appendChild(cell);
    }

    if (rows.length === 0) {
        addRow();
    }
}

// Function to remove the last row from the grid
function removeRow() {
    const gridContainer = document.getElementById('grid-container');
    const rows = gridContainer.children;

    // Remove the last row if it exists
    if (rows.length > 0) {
        // Remove the last row from the grid container
        gridContainer.removeChild(rows[rows.length - 1]);
    }
}

// Function to remove the last column from the grid
function removeCol() {
    const gridContainer = document.getElementById('grid-container');
    const rows = gridContainer.children;

    // Remove the last cell from each row
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].children;
        if (cells.length > 0) {
            rows[i].removeChild(cells[cells.length - 1]);
        }
    }
}

// Event listener for the action menu
document.getElementById('do-action').addEventListener('click', () => {
    // action -> value within the dropdown
    const action = document.getElementById('action-menu').value;
    if (action === 'add-row') {
        addRow();
    }
    else if (action === 'add-col') {
        addCol();
    }
    else if (action === 'remove-row') {
        removeRow();
    }
    else if (action === 'remove-col') {
        removeCol();
    }
});

function colorCell(event) {
    const colorPicker = document.getElementById('color-picker');
    // Get the selected color from the color picker
    const selectedColor = colorPicker.value; 
    // Change the cell's background color -> change the DOM

    event.target.style.backgroundColor = selectedColor; 
}
// Ensure the grid starts empty
document.getElementById('grid-container').innerHTML = '';