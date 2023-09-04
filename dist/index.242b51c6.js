function listenBoard() {
    board.addEventListener("click", runGame);
}
let turn = "X";
// const TURN = {
//   X: "X",
//   O: "X",
//   EMPTY: " ",
// };
const board = document.querySelector(".game-container");
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    const boxId = e.target.id;
    console.log(boxId);
    if (boxId === null) return;
    const box = document.querySelector(`#${boxId}`);
    if (box === null || box.textContent !== "") return;
    box.textContent = turn;
    switchPlayer(turn);
}
function switchPlayer(turn) {
    if (turn === "X") turn = "O";
    else turn = "X";
}
function createBoard() {
    for(let i = 1; i <= 9; i++)makeBox(i);
}
function makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`;
    box.textContent = "";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map
