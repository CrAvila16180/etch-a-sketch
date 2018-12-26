let number = 16;
let displayNumber = document.querySelector('.txtNumber');
let buttonIncrease = document.querySelector('#up');
let buttonDecrease = document.querySelector('#down');

displayNumber.style.width = '30px';
displayNumber.textContent = number;

const increaseNumber = () => {
    number += 1;
    displayNumber.textContent = number;
    console.log(number);
}

const decreaseNumber = () => {
    number -= 1;
    displayNumber.textContent = number;
    console.log(number);
}


const createCell = (length) => {
    const container = document.querySelector('.container');
    const cell = document.createElement('div');
    let boxSize = `${(100/number)}%`;
    cell.classList.add('cell');
    cell.style.width = `${boxSize}`;
    cell.style.height = `${boxSize}`;
    container.appendChild(cell);
    
}


function handleUpdate() {
    console.log(this.value)
}

function generateGrid(){
    let value = number;
    for(i = 0; i< (value*value); i++){
    createCell(number);}
};






buttonIncrease.addEventListener('click', increaseNumber)
buttonDecrease.addEventListener('click', decreaseNumber)

buttonIncrease.addEventListener('click', generateGrid);
buttonDecrease.addEventListener('click', generateGrid);



