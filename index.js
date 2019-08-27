function calculate() {
  var A = document.getElementById("A");
  var B = document.getElementById("B");
  var D = document.getElementById("D");
  var C = document.getElementById("C");

  switch (D.value) {
    case "+":
      C.value = parseFloat(A.value) + parseFloat(B.value);
      break;
    case "-":
      C.value = parseFloat(A.value) - parseFloat(B.value);
      break;
    case "*":
      C.value = parseFloat(A.value) * parseFloat(B.value);
      break;
    case "/":
      C.value = parseFloat(A.value) / parseFloat(B.value);
      break;
    default:
      console.log("Введите корректное значение");
  }
}
