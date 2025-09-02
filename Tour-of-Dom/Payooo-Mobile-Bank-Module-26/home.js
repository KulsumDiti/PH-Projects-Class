const validPin = 1234;

// add money feature:

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11 || accountNumber.length > 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    fieldClear("bank");
    fieldClear("account-number");
    fieldClear("add-amount");
    fieldClear("add-pin");
  });

//cashout money feature:

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const pinNumber = parseInt(document.getElementById("add-pin2").value);

  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length < 11 || agentNumber.length > 11) {
    alert("Invalid agent Number");
    return;
  }
  if (amount <= 0 || amount >= availableBalance) {
    alert("No Balance Available");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;

  fieldClear("agent-number");
  fieldClear("add-pin2");
  fieldClear("withdraw-amount");
});

// Transfer Money section:

document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const userNumber = document.getElementById("User-number").value;
  const pinNumber = parseInt(document.getElementById("add-pin3").value);

  const amount = parseInt(document.getElementById("transfer-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (userNumber.length < 11 || userNumber.length > 11) {
    alert("Invalid agent Number");
    return;
  }
  if (amount <= 0 || amount >= availableBalance) {
    alert("No Balance Available");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }

  const newBalance = availableBalance - amount;
  document.getElementById("available-balance").innerText = newBalance;
  fieldClear("User-number");
  fieldClear("add-pin3");
  fieldClear("transfer-amount");
});

//Get Bonus Section:

document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const bonusCoupon = document.getElementById("bonus-coupon").value;
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (bonusCoupon === "reyal@diti") {
    const bonusBalance = parseInt("5000");
    const newAddBalance = availableBalance + bonusBalance;
    document.getElementById("available-balance").innerText = newAddBalance;
    alert("You receive 5000$");
  } else {
    alert("Please Enter coupon-code reyal@diti");
  }

  fieldClear("bonus-coupon");
});

// Pay-Bill :
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const payBill = document.getElementById("pay-billl").value;
  const billerNumber = document.getElementById("Bill-number").value;

  const amount = parseInt(document.getElementById("pay-amount").value);

  const pinNumber = parseInt(document.getElementById("add-pin4").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (billerNumber.length < 11 || billerNumber.length > 11) {
    alert("Invalid biller Number");
    return;
  }
  if (amount <= 0 || amount >= availableBalance) {
    alert("No Balance Available");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }
  const newAvailableBalance = availableBalance - amount;
  document.getElementById("available-balance").innerText = newAvailableBalance;
  alert("Successfully Done");
  fieldClear("pay-billl");
  fieldClear("pay-amount");
  fieldClear("add-pin4");
  fieldClear("Bill-number");
});
//Log-out:
document.getElementById("log-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("transaction-history-parent").style.display = "none";
  buttonCard("add-button");
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("transaction-history-parent").style.display =
      "none";
    buttonCard("cash-out-button");
  });
document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("transaction-history-parent").style.display =
      "none";
    document.getElementById("transfer-money-parent").style.display = "block";
    buttonCard("transfer-button");
  });
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transaction-history-parent").style.display =
      "none";
    document.getElementById("get-bonus-parent").style.display = "block";
    buttonCard("get-bonus-button");
  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("transaction-history-parent").style.display =
      "none";
    document.getElementById("pay-bill-parent").style.display = "block";
    buttonCard("pay-bill-button");
  });
document
  .getElementById("transactions-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transaction-history-parent").style.display =
      "block";
    buttonCard("transactions-button");
  });
//button-card function:

function buttonCard(id) {
  const allCards = document.getElementsByClassName("card");
  for (const card of allCards) {
    card.style.backgroundColor = "#fff";
    card.style.borderColor = "#ccc";
  }

  document.getElementById(id).style.backgroundColor = "rgba(8, 116, 242, 0.05)";
  document.getElementById(id).style.borderColor = "#0874F2";
}

//Input-Field-Clear:
function fieldClear(id) {
  document.getElementById(id).value = "";
}
