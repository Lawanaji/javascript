function calculate() {
  const inputOne = parseInt(prompt("Please enter input one"));
  const operator = prompt("Please enter operator");
  const inputTwo = parseInt(prompt("Please enter input two"));
  let compute;
  if (operator === "+") {
    compute = inputOne + inputTwo;
  } else if (operator === "x") {
    compute = inputOne * inputTwo;
  } else if (operator === "-") {
    compute = inputOne - inputTwo;
  } else if (operator === "/") {
    compute = inputOne / inputTwo;
  } else {
    window.alert("There is an error in your values");
  }
  window.alert(compute);
}

calculate();
