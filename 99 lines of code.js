//99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file

//Let friends be Jason, Daniel, Cole, Grant, Pete (Array List)
let friends = ["Jason", "Daniel", "Cole", "Grant", "Pete"]
//Let Number of Lines be 99
//let numOfLines = 98

//if(numOfLines >= 99) {
    //console.log(numOfLines + " " + "lines of lines of code in the file!")
//} else {
    //subtract();
    //console.log(numOfLines)
//}

//while (numOfLines >= 99) {
//    --numOfLines;
//}
//console.log(numOfLines + " " + "lines of lines of code in the file!")

//function subtract(numOfLines, num2) {
 //   return --numOfLines;
//} 

for(let i = 0; i < friends.length; i++) {

    for(let j = 99; j > 0; j--){
        if(j !== 1){
         console.log(`${j} lines of code in the file, ${j} lines of code. ${friends[i]} strikes one out,
         clears it all out, ${j - 1} lines of code in the file`)
        }
    }
}