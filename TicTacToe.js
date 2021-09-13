//module
const gameBoard = (() => {
    'use strict';

    let board = [
        ['o', 'x', 'o'],
        ['x', 'o', 'o'],
        ['o', 'x', 'o']
    ];


    return {board};
})();

const displayController = (() => {
    //const container = document.querySelector("#container");
    const gridCase = document.querySelectorAll(".case");

    const printBoardContent = () => {
        for(let currentCase of gridCase){
            currentCase.style.backgroundColor = "red";
        }
    } 
    
    return {printBoardContent};
})();

//factory
const player = (name) => {
    return {name};
};


displayController.printBoardContent();