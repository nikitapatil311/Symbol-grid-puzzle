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
    console.log("there is a winner");
  }
}

function checkWinner() : boolean{
    const boxes : Array<string> getBoxes();
}

function getBoxes: Array<string>{
    const boxesContent: Array<string> = [];
    for(let i=1; i<=9; i++){
        const box = document.querySelector(`box-${i}`) as HTMLElement;
        const boxesContent: string | null = box.textContent;
        if(boxeContent === null ) boxesContent.push("")
    }

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
