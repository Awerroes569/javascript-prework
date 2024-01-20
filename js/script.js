console.log("generating number using dictionary")
generateMove(generateMoveDict, 10);

console.log("generating number using if else loop")
generateMove(generateMoveIf, 10);

console.log("receiving computer move")
let computerMove = generateMoveIf()
console.log("Computer move is: " + computerMove)

