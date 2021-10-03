//module
const gameBoard = (() => {
    'use strict';

    let board = ['o', 'x', 'o','x', 'o', 'o','o', 'x', 'o'];


    return {board};
})();

const displayController = (() => {
    const gridCase = document.querySelectorAll(".case");
    const currentBoard = gameBoard.board;

    const printBoardContent = () => {

        for(let i = 0; i < 9; i++){
            gridCase[i].innerHTML = currentBoard[i];
        }
    } 
    
    return {printBoardContent};
})();

//factory
const player = (name) => {
    return {name};
};


displayController.printBoardContent();