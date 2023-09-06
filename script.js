var result = document.getElementById("result");
var buttons = document.getElementsByClassName("button");
// console.log(buttons);
var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      operator = value;
      operand1 = parseFloat(result.value);
      result.value = null;
    } else if (value == "=") {
      operand2 = parseFloat(result.value);
      result.value = eval(operand1 + operator + operand2);
      // console.log('eval completed');
    } else if (value == "AC") {
      operand1 = null;
      operator = null;
      operand2 = null;
      result.value = null;
      // console.log('all clear');
    } else if (value == "backSpace") {
      let removeLastChar = result.value.slice(0, result.value.length - 1);
      result.value = removeLastChar;
    } else if (value == "changeSign") {
      let findSign = result.value.slice(0, 1);
      // console.log(findSign);
      if (findSign == "-") {
        result.value = result.value.slice(1);
      } else {
        result.value = "-" + result.value;
      }
    } else if (value == "%") {
      operand2 = result.value;
      let percentageCalculation = (operand1 * operand2) / 100;
      result.value = eval(operand1 + operator + percentageCalculation);
    } else {
      if (result.value == "0" && value!='.') {
        result.value = value;
      } else {
        result.value += value;
      }
      // console.log('input added');
    }
  });
}
