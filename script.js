let gridSize = 16;
let cellSize = 512 / gridSize;

//function which creates <divs> for drawing grid
function generate(gridSize){
    const container = document.querySelector('#container');
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
}
