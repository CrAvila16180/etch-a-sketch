let number = document.querySelector('#number');
let grid = number.getAttribute('value');


const createCell = (length) => {
    const container = document.querySelector('.container')
    const cell = document.createElement('div');
    const containerSize = container.style.width;
    let boxSize = `${(Math.floor(100/length))}%`;
    cell.classList.add('cell');
    cell.style.width = `${boxSize}`;
    cell.style.height = `${boxSize}`;
    container.appendChild(cell);
    
}


function handleUpdate() {
    console.log(this.value)
}

const generateGrid = (length) => {
    let value = length;
    for(i = 0; i<= (value*value); i++){
        createCell(length);
    }
}

number.addEventListener('change', handleUpdate);
number.addEventListener('click', handleUpdate);

generateGrid(10);
