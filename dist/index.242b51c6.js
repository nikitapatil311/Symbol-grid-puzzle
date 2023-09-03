console.log("I am Here");
const board = document.querySelector(".game-container");
function main() {
    makeBox();
}
function makeBox() {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = "x";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map
