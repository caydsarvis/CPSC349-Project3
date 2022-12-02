let board = document.getElementsByClassName('tile');

let ways_to_win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let player1 = 'X';
let player2 = 'O';
let turn = 0;

for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', (e) => {
        if (turn == 0) {
            board[i].textContent = player1;
            turn = 1;
        }
        else {
            board[i].textContent = player2;
            turn = 0;
        }
    })
}