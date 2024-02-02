let amountDiv = 256;
const container = document.querySelector('.container');

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

createAmountEntered();