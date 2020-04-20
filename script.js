//function which creates <divs> for drawing grid
function generate(){
    const container = document.querySelector('#container');
    let gridSize = document.getElementById('gridSize').value;
    let cellSize = 512 / gridSize;
    for(let i = 0; i < gridSize;i++){
        for(let j = 0; j < gridSize;j++){
            const div = document.createElement('div');
            div.className = 'cell';
            div.style.height = `${cellSize}px`;
            div.style.width = `${cellSize}px`;
            container.appendChild(div);
            console.log('added cell');
        }
    }
    layoutGrid(cellSize, gridSize);
}

//function which adds css grid rules for grid
function layoutGrid(cellSize, gridSize)  {
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
}

// adds event listener to generated divs
function listen(){
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', event => {
            cell.style.backgroundColor = 'black';
        })
    })    
}