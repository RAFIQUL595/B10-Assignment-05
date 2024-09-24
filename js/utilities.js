// Input Value Share:
function inputValueNumber(id) {
  const inputNumber = document.getElementById(id).value;
  if (isNaN(inputNumber)) {
    return NaN;
  }
  const finalInputNumber = parseFloat(inputNumber);
  return finalInputNumber;
}

// Inner Text Share:
function innerTextNumber(id) {
  const innerTextNumber = document.getElementById(id).innerText;
  const finalInnerText = parseFloat(innerTextNumber);
  return finalInnerText;
}
