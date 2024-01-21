var myDictionary = {
    1: "stone",
    2: "paper",
    3: "scissors"
};

var winPositions = [
    "stonescissors",
    "scissorspaper",
    "paperstone"
];

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

var allowedMoves = [1, 2, 3];

function generateMoveDict() {
    let move = generateNumber();
    return myDictionary[move];
}

function generateMoveIf() {
    let move = generateNumber();
    if (move == 1) {
        return "stone";
    }
    else if (move == 2) {
        return "paper";
    }
    else if (move == 3) {
        return "scissors";
    }
    else {
        return "Error: move unknown  check generateMove* function"
    }   
}

function generateMove(callback, number) {
    var functionList = [generateMoveDict, generateMoveIf];
    if (functionList.includes(callback)) {
        console.log("callback is in the list");
    } else {
        console.log("Error: function is not in the list or doesnt exist");
        return;
    }

    console.log("Executing callback " + callback.name + " " + number + " times:")

    for (var i = 0; i < number; i++) {
        console.log(callback())
    }
}

function receiveHumanMove() {

    var userInput = 0;

    while (true) {
        var userInput = Number(prompt("Please enter your move:"));
        if (allowedMoves.includes(userInput)) {
            return myDictionary[userInput];
        }
        else {
            console.log("Error: not valid move   try again");
        }           
    }
}

function winOrLoss(byHuman, byAI) {
    if (byHuman == byAI) {
        return "draw";
    }
    else if (winPositions.includes(byHuman+byAI)) {
        return "win";
    }
    else {
        return "loss";
    }
}