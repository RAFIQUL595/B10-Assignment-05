// Card 1 Event Listener
document.getElementById("card-1-btn").addEventListener("click", function () {
  handleDonation(
    "card-1-input-number",
    "noakhali-collect-money",
    "Flood at Noakhali",
    "btn-show-history"
  );
});

// Card 2 Event Listener
document.getElementById("card-2-btn").addEventListener("click", function () {
  handleDonation(
    "card-2-input-number",
    "feni-collect-money",
    "Flood Relief in Feni",
    "btn-show-history"
  );
});

// Card 3 Event Listener
document.getElementById("card-3-btn").addEventListener("click", function () {
  handleDonation(
    "card-3-input-number",
    "quota-collect-money",
    "Aid for Injured in the Quota Movement",
    "btn-show-history"
  );
});

// Handle Donations
function handleDonation(inputId, donationId, cause, history) {
  const amount = inputValueNumber(inputId);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  const currentBalance = innerTextNumber("current-balance");
  if (amount > currentBalance) {
    alert("Insufficient balance!");
    return;
  }

  const donateMoney = innerTextNumber(donationId);
  document.getElementById(donationId).innerText = donateMoney + amount;
  document.getElementById("current-balance").innerText =
    currentBalance - amount;

  document.getElementById("successfully-messages").classList.remove("hidden");
  document.getElementById("close-btn").classList.remove("hidden");

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("successfully-messages").classList.add("hidden");
    document.getElementById("close-btn").classList.add("hidden");
  });

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="border rounded-lg p-5 mb-3">
      <h3 class="font-semibold py-3">${amount} Taka is Donated for ${cause}, Bangladesh</h3>
      <p>Date: ${new Date()}</p>
    </div>
  `;
  document.getElementById(history).appendChild(div);
}

// Donation Button Clicked Event
document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("main-section");
});

// History Button Clicked Event
document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("btn-show-history");
});

// Donation Button Clicked Color
document.getElementById("donation-btn").addEventListener("click", function () {
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

// History Button Clicked Color
document.getElementById("history-btn").addEventListener("click", function () {
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
