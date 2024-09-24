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

// Class Remove && add Share:
function showSectionById(id) {
  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("btn-show-history").classList.add("hidden");

  // Show Section
  document.getElementById(id).classList.remove("hidden");
}
