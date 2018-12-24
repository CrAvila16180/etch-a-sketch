let number = document.querySelector('#number');
let grid = number.getAttribute('value');



const createCell = () => {
    const container = document.querySelector('.container')
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell)

}


function handleUpdate() {
    console.log(this.value)
}

const generateGrid = (grid) => {
    for(i = 0; i<grid*2; i++){
        createCell();
    }
}

number.addEventListener('change', generateGrid(grid) );
number.addEventListener('click', handleUpdate );
