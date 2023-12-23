function numbers(num) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + num;

  document.getElementById("textfield").value = newText;
}
function plus(symbol) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + symbol;

  document.getElementById("textfield").value = newText;

  return "+";
}
function minus(symbol) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + symbol;

  document.getElementById("textfield").value = newText;
}
function multiply(symbol) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + symbol;

  document.getElementById("textfield").value = newText;
}
function divide(symbol) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + symbol;

  document.getElementById("textfield").value = newText;
}
function percentage(symbol) {
  let currentText = document.getElementById("textfield").value;

  let newText = currentText + symbol;

  document.getElementById("textfield").value = newText;
}

function equal() {
  let values = document.getElementById("textfield").value;

  if (values.includes("+")) {
    let a = values.split("+");
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
      sum += parseFloat(a[i]);
    }

    values = sum.toString();
    document.getElementById("textfield").value = values;
  } else if (values.includes("-")) {
    let a = values.split("-");
    let result = parseFloat(a[0]);

    for (let i = 1; i < a.length; i++) {
      result -= parseFloat(a[i]);
    }

    values = result.toString();
    document.getElementById("textfield").value = values;
  } else if (values.includes("*")) {
    let a = values.split("*");
    let sum = parseFloat(a[0]);

    for (let i = 1; i < a.length; i++) {
      sum *= parseFloat(a[i]);
    }

    values = sum.toString();
    document.getElementById("textfield").value = values;
  } else if (values.includes("÷")) {
    let a = values.split("÷");
    let sum = parseFloat(a[0]);

    for (let i = 1; i < a.length; i++) {
      sum /= parseFloat(a[i]);
    }

    values = sum.toString();
    document.getElementById("textfield").value = values;
  } else if (values.includes("%")) {
    let a = values.split("%");
    let sum = parseFloat(a[0]);
    sum = sum / 100;
    values = sum.toString();
    document.getElementById("textfield").value = values;
  }
}
function clearelements() {
  let textField = document.getElementById("textfield");
  textField.value = "";
}

function backspace() {
  let textField = document.getElementById("textfield");
  let values = textField.value;
  values = values.substring(0, values.length - 1);
  textField.value = values;
}
