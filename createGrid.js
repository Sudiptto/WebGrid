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
            // Remove the last cell from the row
            rows[i].removeChild(cells[cells.length - 1]);
        }
    }
}

// Function to color all uncolored cells with the selected color
function colorUncoloredCells() {
    // Get the grid container and all cells
    const gridContainer = document.getElementById('grid-container');
    const cells = gridContainer.getElementsByClassName('grid-cell');
    const colorPicker = document.getElementById('color-picker');
    const selectedColor = colorPicker.value;

    // Loop through all cells and color only the uncolored ones (white)
    for (let i = 0; i < cells.length; i++) {
        
        const cellColor = window.getComputedStyle(cells[i]).backgroundColor;
        // Check if the cell is uncolored (white) -> use RGB instead of just 'white' -> more accurate
        if (!cellColor || cellColor === 'rgb(255, 255, 255)') {
            cells[i].style.backgroundColor = selectedColor;
        }
    }
}

// function to color all cells with selected color
function colorAllCells() {
    // Get the grid container and all cells
    const gridContainer = document.getElementById('grid-container');
    const cells = gridContainer.getElementsByClassName('grid-cell');
    const colorPicker = document.getElementById('color-picker');
    const selectedColor = colorPicker.value;

    // Loop through all cells and color EVERYTHING
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = selectedColor;
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
    else if (action === 'color-uncolored') {
        colorUncoloredCells(); 
    }
    else if (action === 'color-all') {
        colorAllCells(); 
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