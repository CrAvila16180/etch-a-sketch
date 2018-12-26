let number = 16;
    displayNumber = document.querySelector('.txtNumber');
    buttonIncrease = document.querySelector('#up');
    buttonDecrease = document.querySelector('#down');
    container = document.querySelector('.container');
    cells = '';
    clearButton = document.querySelector('.clear');

function deleteCells(){
    container.innerHTML = '';
 }

 function clearCells(){
     cells.forEach(cell => {
         cell.style.background = 'white';
     });
 }

let changeColor = (e) =>{
    console.log(e);
    if(e.target.getAttribute('class') == 'cell'){
        e.target.style.background = 'black';
    }
};



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




function generateGrid(){ 
    deleteCells(); 
    let value = number;
    for(i = 0; i< (value*value); i++){
    createCell(number);}
    cells = document.querySelectorAll('.cell');
    console.log(cells);
};




generateGrid(number);

cells.forEach(cell => {
    addEventListener('mouseover',changeColor);
    
});


clearButton.addEventListener('click', clearCells);

buttonIncrease.addEventListener('click', increaseNumber)
buttonDecrease.addEventListener('click', decreaseNumber)



buttonIncrease.addEventListener('click', generateGrid);
buttonDecrease.addEventListener('click', generateGrid);





