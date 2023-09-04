function listenBoard(): void {
  board.addEventListener("click", runGame);
}
const board = document.querySelector(".game-container") as HTMLElement;
function main(): void {
  createBoard();
  listenBoard();
}

function runGame(e: Event): void {
  console.log(e, "button clicked");
}

function createBoard(): void {
  for (let i = 0; i < 9; i++) {
    makeBox(i);
  }
}

function makeBox(i: number): void {
  const box: HTMLDivElement = document.createElement("div");
  box.className = "box";
  box.id = `box-${i}`;
  box.textContent = "x";
  board.append(box);
}

main();
