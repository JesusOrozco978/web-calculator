//Take user input
function sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // add two numbers 
    var sum = Number(num1) + Number(num2); 
    //move soultion to answer box 
    document.getElementById("answer").value = sum;
}
 