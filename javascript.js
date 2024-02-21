// let amountDiv = 10000;
const container = document.querySelector('.container');
const inputButton = document.querySelector('.inputButton');
let contentGrid;
let amountDiv = 0;
let removeCheck = 0;
let removeCounter = 0;


inputButton.addEventListener('click', () =>{
    removeCheck = removeCheck + 1; 
    if(removeCheck > 1){
        removeGrid();
    }
    amountDiv = prompt("Please enter the size of your grid: ");
    createAmountEntered();
    contentGrid = document.querySelectorAll('.contentGrid');
    const listLength = contentGrid.length;
    addHoveringEffect();
    removeCounter = 0;
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

function removeGrid(){
    for(i = amountDiv; i > 0; i--){
        contentGrid[removeCounter].remove();
        removeCounter = removeCounter + 1;
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