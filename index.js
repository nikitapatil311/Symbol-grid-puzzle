function $80bd448eb6ea085b$var$listenBoard() {
    $80bd448eb6ea085b$var$board.addEventListener("click", $80bd448eb6ea085b$var$runGame);
}
let $80bd448eb6ea085b$var$turn = "X";
const $80bd448eb6ea085b$var$board = document.querySelector(".game-container");
const $80bd448eb6ea085b$var$button = document.querySelector(".button");
const $80bd448eb6ea085b$var$winMessage = document.querySelector(".winner");
function $80bd448eb6ea085b$var$main() {
    $80bd448eb6ea085b$var$createBoard();
    $80bd448eb6ea085b$var$listenBoard();
}
function $80bd448eb6ea085b$var$runGame(e) {
    const box = e.target;
    if (!box || box.textContent !== "") return;
    box.textContent = $80bd448eb6ea085b$var$turn;
    const winner = $80bd448eb6ea085b$var$checkWinner();
    if (!winner) $80bd448eb6ea085b$var$switchPlayer();
    else $80bd448eb6ea085b$var$endGame();
}
function $80bd448eb6ea085b$var$endGame() {
    $80bd448eb6ea085b$var$board.removeEventListener("click", $80bd448eb6ea085b$var$runGame);
    $80bd448eb6ea085b$var$button.addEventListener("click", $80bd448eb6ea085b$var$resetGame);
    $80bd448eb6ea085b$var$winMessage.textContent = `Winner is ${$80bd448eb6ea085b$var$turn}`;
    $80bd448eb6ea085b$var$winMessage.style.display = "block";
    $80bd448eb6ea085b$var$button.style.visibility = "visible";
}
function $80bd448eb6ea085b$var$resetGame() {
    $80bd448eb6ea085b$var$turn = "X";
    $80bd448eb6ea085b$var$resetBoxes();
    $80bd448eb6ea085b$var$button.style.visibility = "hidden";
    $80bd448eb6ea085b$var$winMessage.style.display = "none";
    $80bd448eb6ea085b$var$board.addEventListener("click", $80bd448eb6ea085b$var$runGame);
}
function $80bd448eb6ea085b$var$resetBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.textContent = "";
    });
}
function $80bd448eb6ea085b$var$checkWinner() {
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
function $80bd448eb6ea085b$var$switchPlayer() {
    $80bd448eb6ea085b$var$turn = $80bd448eb6ea085b$var$turn === "X" ? "O" : "X";
}
function $80bd448eb6ea085b$var$createBoard() {
    for(let i = 0; i < 9; i++)$80bd448eb6ea085b$var$makeBox(i);
}
function $80bd448eb6ea085b$var$makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = "";
    $80bd448eb6ea085b$var$board.append(box);
}
$80bd448eb6ea085b$var$main();


//# sourceMappingURL=index.js.map
