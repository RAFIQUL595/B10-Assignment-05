//Card 1 Event Listener:
document.getElementById("card-1-btn").addEventListener("click", function () {
  const amount = inputValueNumber("card-1-input-number");

  // History Chacked Start Here

  const div = document.createElement("div");
  div.innerHTML = ` 
      <div class="border rounded-lg p-5 mb-3">
      <h3 class="font-semibold py-3"> ${amount} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
       <p>Date : ${new Date()}</p>
       </div>
      `;
  document.getElementById("btn-show-history").appendChild(div);
  // History Chacked End Here

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

//Card 2 Event Listener:
document.getElementById("card-2-btn").addEventListener("click", function () {
  const amount = inputValueNumber("card-2-input-number");

  // History Chacked Start Here

  const div = document.createElement("div");
  div.innerHTML = ` 
      <div class="border rounded-lg p-5 mb-3">
      <h3 class="font-semibold py-3"> ${amount} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
       <p>Date : ${new Date()}</p>
       </div>
      `;
  document.getElementById("btn-show-history").appendChild(div);
  // History Chacked End Here

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

//Card 3 Event Listener:
document.getElementById("card-3-btn").addEventListener("click", function () {
  const amount = inputValueNumber("card-3-input-number");

  // History Chacked Start Here

  const div = document.createElement("div");
  div.innerHTML = ` 
      <div class="border rounded-lg p-5 mb-3">
      <h3 class="font-semibold py-3"> ${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
       <p>Date : ${new Date()}</p>
       </div>
      `;
  document.getElementById("btn-show-history").appendChild(div);
  // History Chacked End Here

  if (!isNaN(amount) && amount > 0) {
    const donateMoney = innerTextNumber("quota-collect-money");

    const currentBalance = innerTextNumber("current-balance");

    if (amount > currentBalance) {
      alert("Insufficient balance!");
      return;
    }

    const total = donateMoney + amount;
    document.getElementById("quota-collect-money").innerText = total;

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

// Donation Button Clicked Event
document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("main-section");
  // Donation button styles
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  document
    .getElementById("donation-btn")
    .classList.remove(
      "bg-gray-100",
      "hover:bg-gray-300",
      "border",
      "opacity-80"
    );
  document.getElementById("donation-btn").classList.add("bg-[#B4F461]");

  document
    .getElementById("history-btn")
    .classList.add("bg-gray-100", "hover:bg-gray-300", "border", "opacity-80");
});

// History Button Clicked Event
document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("btn-show-history");

  // History button styles
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
  document
    .getElementById("history-btn")
    .classList.remove(
      "bg-gray-100",
      "hover:bg-gray-300",
      "border",
      "opacity-80"
    );

  document.getElementById("history-btn").classList.add("bg-[#B4F461]");
  document
    .getElementById("donation-btn")
    .classList.add("bg-gray-100", "hover:bg-gray-300", "border", "opacity-80");
});
