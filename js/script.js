console.log("generating number using dictionary");
generateMove(generateMoveDict, 10);

console.log("generating number using if else loop");
generateMove(generateMoveIf, 10);


console.log("trying duel");
console.log("human move time");
let byHumanMove = receiveHumanMove();
console.log("Human move is: " + byHumanMove);
let byAIMove = generateMoveIf();
console.log("AI move is: " + byAIMove);
let result = winOrLoss(byHumanMove, byAIMove);
console.log("the result for human is: " + result);


