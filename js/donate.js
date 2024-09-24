//Card 1
document.getElementById("card-1-btn").addEventListener("click", function () {
  const amount = inputValueNumber("card-1-input-number");

  if (!isNaN(amount) && amount > 0) {
    const donateMoney = innerTextNumber("noakhali-collect-money");

    const currentBalance = innerTextNumber("current-balance");

    if (amount > currentBalance) {
      alert("Insufficient balance!");
      return;
    }

    const total = donateMoney + amount;
    document.getElementById("noakhali-collect-money").innerText = total;

    const remainingBalance = currentBalance - amount;
    document.getElementById("current-balance").innerText = remainingBalance;

    const successfullyMessages = document.getElementById(
      "successfully-messages"
    );
    successfullyMessages.classList.remove("hidden");
    document.getElementById("close-btn").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function () {
      successfullyMessages.classList.add("hidden");
      document.getElementById("close-btn").classList.add("hidden");
    });
  } else {
    alert("Please enter a valid number.");
  }
});

//Card 2
document.getElementById("card-2-btn").addEventListener("click", function () {
  const amount = inputValueNumber("card-2-input-number");

  if (!isNaN(amount) && amount > 0) {
    const donateMoney = innerTextNumber("feni-collect-money");

    const currentBalance = innerTextNumber("current-balance");

    if (amount > currentBalance) {
      alert("Insufficient balance!");
      return;
    }

    const total = donateMoney + amount;
    document.getElementById("feni-collect-money").innerText = total;

    const remainingBalance = currentBalance - amount;
    document.getElementById("current-balance").innerText = remainingBalance;

    const successfullyMessages = document.getElementById(
      "successfully-messages"
    );
    successfullyMessages.classList.remove("hidden");
    document.getElementById("close-btn").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function () {
      successfullyMessages.classList.add("hidden");
      document.getElementById("close-btn").classList.add("hidden");
    });
  } else {
    alert("Please enter a valid number.");
  }
});
