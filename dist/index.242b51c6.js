function listenBoard() {
    board.addEventListener("click", runGame);
}
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
