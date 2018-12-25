let number = document.querySelector('#number');
let grid = number.getAttribute('value');
let button = document.querySelector('button');

let numero = Number(prompt('Enter Number'));


const createCell = (length) => {
    
    const container = document.querySelector('.container');
    const containerWidth = container.getAttribute('width');
    const cell = document.createElement('div');
    
    let boxSize = `${(100/length)}%`;
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
    for(i = 0; i< (value*value); i++){
        createCell(length);
    }
}

number.addEventListener('change', handleUpdate);
number.addEventListener('click', handleUpdate);

button.addEventListener('click', generateGrid(number));

generateGrid(numero);



