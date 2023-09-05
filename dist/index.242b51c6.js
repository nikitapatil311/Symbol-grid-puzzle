function listenBoard() {
    board.addEventListener("click", runGame);
}
let turn = "X";
const board = document.querySelector(".game-container");
const button = document.querySelector(".button");
const winMessage = document.querySelector(".winner");
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    const box = e.target;
    if (!box || box.textContent !== "") return;
    box.textContent = turn;
    const winner = checkWinner();
    if (!winner) switchPlayer();
    else endGame();
}
function endGame() {
    board.removeEventListener("click", runGame);
    button.addEventListener("click", resetGame);
    winMessage.textContent = `Winner is ${turn}`;
    winMessage.style.display = "block";
    button.style.visibility = "visible";
}
function resetGame() {
    turn = "X";
    resetBoxes();
    button.style.visibility = "hidden";
    winMessage.style.display = "none";
    board.addEventListener("click", runGame);
}
function resetBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.textContent = "";
    });
}
function checkWinner() {
    const boxes = document.querySelectorAll(".box");
    const winningCombinations = [
        [
            0,
            1,
            2
        ],
        [
            3,
            4,
            5
        ],
        [
            6,
            7,
            8
        ],
        [
            0,
            3,
            6
        ],
        [
            1,
            4,
            7
        ],
        [
            2,
            5,
            8
        ],
        [
            0,
            4,
            8
        ],
        [
            2,
            4,
            6
        ]
    ];
    for (const combo of winningCombinations){
        const [a, b, c] = combo;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[b].textContent === boxes[c].textContent) return true;
    }
    return false;
}
function switchPlayer() {
    turn = turn === "X" ? "O" : "X";
}
function createBoard() {
    for(let i = 0; i < 9; i++)makeBox(i);
}
function makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = "";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map
