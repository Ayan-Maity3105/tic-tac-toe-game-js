let boxes = document.querySelectorAll('.box');
let message = document.querySelector('.result');
let newGameBtn = document.querySelector('.new-game');
let mainContainer = document.querySelector('.container');
let resultContainer = document.querySelector('.winner-container');

let turn0 = true; // players 0's turn first
let count = 0;

let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "0";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        count++;
        console.log(count);
        box.disabled = true;
        if (count == 9) {
            resultContainer.style.display = "flex";
            message.innerHTML = `Match is Draw`;
            disableBtn();
        }
        else {
            checkWinner();
        }
    })
})

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                resultContainer.style.display = "flex";
                message.innerHTML = `Winner is Player${pos1}`;
                boxes[pattern[0]].classList.add("winner");
                boxes[pattern[1]].classList.add("winner");
                boxes[pattern[2]].classList.add("winner");
                disableBtn();
            }
        }

    }
}


const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

newGameBtn.addEventListener('click', () => {
    turn0 = true;
    resultContainer.style.display = "none";
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        box.style.backgroundColor = "white";
        count = 0;
    }
})

