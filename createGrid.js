// Function to add a row to the grid
function addRow() {
    // Get the grid container and the number of columns
    const gridContainer = document.getElementById('grid-container');
    const cols = gridContainer.firstChild ? gridContainer.firstChild.children.length : 1; // Default to 1 column if grid is empty

    const newRow = document.createElement('div');

    // Add the new row to the grid container
    newRow.classList.add('grid-row');
    for (let i = 0; i < cols; i++) {
        // Create a new cell and append it to the new row
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        newRow.appendChild(cell);
    }
    gridContainer.appendChild(newRow);
}

// Event listener for the action menu
document.getElementById('do-action').addEventListener('click', () => {
    const action = document.getElementById('action-menu').value;
    if (action === 'add-row') {
        addRow();
    }
});

// Ensure the grid starts empty
document.getElementById('grid-container').innerHTML = '';