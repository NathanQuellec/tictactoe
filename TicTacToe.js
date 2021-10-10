//module

const displayController = (() => {
    'use strict';
    const clickOnCase = (e) => {

        let currentCase = e.target;

        if(currentCase.innerHTML == ''){
            currentCase.innerHTML = 'O';
            console.log('check');
            gameBoard.addMarksToBoard('O', currentCase.id);
        }  
    }

    return {clickOnCase};
})();


const gameBoard = (() => {

    'use strict';

    const gridCase = document.querySelectorAll(".case");
    let board = ['', '', '','', '', '','', '', ''];

    const addMarksToBoard = (mark, index) => {
        board[index] = mark;
    }

    const createBoard = () => {
        for(let i = 0; i < 9; i++){
            gridCase[i].innerHTML = board[i];
            gridCase[i].addEventListener("click", displayController.clickOnCase);
        }
    }

    return {createBoard, addMarksToBoard};
})();

//factory
const player = (name) => {
    return {name};
};


gameBoard.createBoard();