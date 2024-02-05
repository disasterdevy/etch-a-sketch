// let amountDiv = 10000;
const container = document.querySelector('.container');
const inputButton = document.querySelector('.inputButton');
let contentGrid;
let amountDiv = 0;


inputButton.addEventListener('click', () =>{
    amountDiv = prompt("Please enter the size of your grid: ");
    createAmountEntered();
    contentGrid = document.querySelectorAll('.contentGrid');
    const listLength = contentGrid.length;
    addHoveringEffect();
})

function createGrid(){
    const contentGrid = document.createElement('div');
    //contentGrid.textContent = 'Dummi';
    container.appendChild(contentGrid);
    contentGrid.classList.add('contentGrid');
}

function createAmountEntered(){
    for(i = amountDiv; i > 0; i--){
        createGrid();
    }
}

// const contentGrid = document.querySelectorAll('.contentGrid');
// const listLength = contentGrid.length;


// find out how this magic works! 
function addHoveringEffect(){
    Array.prototype.forEach.call(contentGrid, item => {
        item.addEventListener('mouseenter', () =>{
            item.classList.add('contentHovered');
        })      
    })
}