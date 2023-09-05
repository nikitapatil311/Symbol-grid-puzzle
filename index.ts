function listenBoard(): void {
  board.addEventListener("click", runGame);
}

type Turn = "X" | "O" | " ";
let turn: Turn = "X";

// const TURN = {
//   X: "X",
//   O: "X",
//   EMPTY: " ",
// };
const board = document.querySelector(".game-container") as HTMLElement;
const button = document.querySelector(".button") as HTMLElement;
const winMessage = document.querySelector(".winner") as HTMLElement;

function main(): void {
  createBoard();
  listenBoard();
}

function runGame(e: Event): void {
  const boxId: string | null = (<HTMLElement>e.target).id;
  console.log(boxId);
  if (boxId === null) return;
  const box: HTMLElement | null = document.querySelector(`#${boxId}`);
  if (box === null || box.textContent !== "") return;
  box.textContent = turn;
  const winner: boolean = checkWinner();
  if (!winner) switchPlayer();
  else {
    endGame();
  }
}

function endGame(): void {
  board.removeEventListener("click", runGame);
  button.addEventListener("click", resetGame);
  if (winMessage === null) return;
  winMessage.textContent = `winner is ${turn}`;
  winMessage.setAttribute("display", "block");
  button.style.visibility = "visible";
}

function resetGame(): void {
  turn = "X";

  resetBoxes();
}
function resetBoxes(): void {
  for (let i = 0; i <= 8; i++) {
    const box = document.querySelector(`#box-${i}`) as HTMLElement;
    box.textContent = "";
  }
}

function checkWinner(): boolean {
  const boxes: Array<string> = getBoxes();
  return (
    (boxes[1] === boxes[2] && boxes[2] === boxes[3] && boxes[1] !== "") ||
    (boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[4] !== "") ||
    (boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[7] !== "") ||
    (boxes[1] === boxes[5] && boxes[5] === boxes[9] && boxes[1] !== "") ||
    (boxes[3] === boxes[5] && boxes[5] === boxes[7] && boxes[3] !== "") ||
    (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== "") ||
    (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "") ||
    (boxes[3] === boxes[6] && boxes[6] === boxes[9] && boxes[3] !== "")
  );
}

function getBoxes(): Array<string> {
  const boxesContent: Array<string> = [];
  for (let i = 1; i <= 9; i++) {
    const box = document.querySelector(`#box-${i}`) as HTMLElement;
    const boxContent: string | null = box.textContent;
    if (boxContent === null) boxesContent.push("");
    else {
      boxesContent.push(boxContent);
    }
  }
  return boxesContent;
}

function switchPlayer(): void {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

function createBoard(): void {
  for (let i = 1; i <= 9; i++) {
    makeBox(i);
  }
}

function makeBox(i: number): void {
  const box: HTMLDivElement = document.createElement("div");
  box.className = "box";
  box.id = `box-${i}`;
  box.textContent = "";
  board.append(box);
}

main();
