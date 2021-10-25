function sum() {
  const box1 = document.getElementById("num1").value;
  const box2 = document.getElementById("num2").value;
  const operation = document.getElementById("summ").value; // this is just the dropdown mennu

  switch (
    operation //if this "sumNames"
  ) {
    case "add": // if value name is this
      calculate = Number(box1) + Number(box2);
      break;
    case "sub":
      calculate = Number(box1) - Number(box2);
      break;
    case "mult":
      calculate = Number(box1) * Number(box2);
      break;
    case "divide":
      calculate = Number(box1) / Number(box2);
      break;
  }
  answer.innerHTML = calculate;
}
