//modules

const gameFlow = (() => {
    'use strict'
    let currentPlayer, otherPlayer, tmp;
    let endOfGame;

    const startGame = (p1, p2) => {
        currentPlayer = p1;
        otherPlayer = p2;     
        endOfGame = false;
    }

    const changePlayer = () => {
        tmp = currentPlayer;
        currentPlayer = otherPlayer;
        otherPlayer = tmp;
    }

    const getGameState = () => endOfGame;

    const resultOfGame = () => {
        if(gameBoard.rowWin() || gameBoard.colWin() || gameBoard.diagWin()){
            endOfGame = true;
            return "Player " + currentPlayer.getName() + " win the game !";
            
        }

        else if(gameBoard.boardIsFull()){
            endOfGame = true;
            return "DRAW !";
        }
        else
            return "";
    }

    const getCurrentPlayer = () => currentPlayer;
    
    return {startGame, changePlayer, getCurrentPlayer, resultOfGame, getGameState};
})()

const displayController = (() => {
    'use strict';
    const message = document.querySelector("#message");
    const restart = document.querySelector("#restart");

    const createEvent = () => {
        restart.addEventListener("click", gameBoard.clearBoard);
    }

    const clickOnCase = (e) => {

        let currentCase = e.target;
        let markOfPlayer = gameFlow.getCurrentPlayer().getMark();

        if(currentCase.innerHTML == '' && gameFlow.getGameState() == false ){
            currentCase.innerHTML = markOfPlayer;
            console.log('check ' + markOfPlayer);
            gameBoard.addMarksToBoard(markOfPlayer, currentCase.id);
            message.innerHTML = gameFlow.resultOfGame();
            gameFlow.changePlayer();
        }  
    }

    return {clickOnCase, createEvent};
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

    const rowWin = () => {
        for(let i=0; i<9; i+=3){
            if( ( board[i] != '' ) && 
                ( board[i] == board[i+1] ) && 
                ( board[i] == board[i+2] ) 
              ){
                return true;
            }
        }
    }

    const colWin = () => {
        for(let i=0; i<3; i++){
            if( ( board[i] != '' ) && 
                ( board[i] == board[i+3] ) && 
                ( board[i] == board[i+6] ) 
              ){
                return true;
            }
        }
    }

    const diagWin = () => {
        if (    ( board[4] != '' ) && (
                ( board[4] == board[0] && board[4] == board[8] ) || 
                ( board[4] == board[2] && board[4] == board[6] )
                )
            )
            return true;
    }

    const boardIsFull = () => {
        for(let i=0; i<9; i++){
            if(board[i]=='')
                return false;
        }
        return true;
    }

    const clearBoard = () => {
        board = ['', '', '','', '', '','', '', ''];
       
        for(let i = 0; i < 9; i++){
            gridCase[i].innerHTML = "";
        }
    }

    return {createBoard, addMarksToBoard, rowWin, colWin, diagWin, boardIsFull, clearBoard};
})();

//factory
const playerFactory = (name, mark) => {

    const getName = () => name;
    const getMark = () => mark;
    
    return {getMark, getName};
};


gameBoard.createBoard();    
displayController.createEvent();
const player1 = playerFactory("Nathan", "X");
const player2 = playerFactory("Test", "O");
gameFlow.startGame(player1, player2);


