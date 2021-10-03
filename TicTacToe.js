//module
const gameBoard = (() => {
    'use strict';
    let board = ['o', 'x', 'o','x', 'o', 'o','o', 'x', 'o'];

    const addMarksToBoard = (marks, index) => {
        board[index] = marks;
    }

    return {board, addMarksToBoard};
})();

const displayController = (() => {
    'use strict';
    const gridCase = document.querySelectorAll(".case");
    const currentBoard = gameBoard.board;

    const clickOnCase = () => {

    }

    const printBoardContent = () => {

        for(let i = 0; i < 9; i++){
            gridCase[i].innerHTML = currentBoard[i];
            gridCase[i].addEventListener("click", clickOnCase);
        }
    }
    
    return {printBoardContent};
})();

//factory
const player = (name) => {
    return {name};
};


displayController.printBoardContent();