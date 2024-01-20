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

var myDictionary = {
    1: "kamień",
    2: "papier",
    3: "nożyce"
};

function generateMoveDict() {
    let move = generateNumber();
    return myDictionary[move];
}

function generateMoveIf() {
    let move = generateNumber();
    if (move == 1) {
        return "kamień";
    }
    else if (move == 2) {
        return "papier";
    }
    else if (move == 3) {
        return "nożyce";
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