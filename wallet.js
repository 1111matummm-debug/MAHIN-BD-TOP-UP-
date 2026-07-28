// MAHIN BD TOP UP - Wallet

window.onload = function () {

    let balance = localStorage.getItem("walletBalance");

    if (balance === null) {
        balance = 0;
        localStorage.setItem("walletBalance", balance);
    }

    document.getElementById("balance").innerText = "৳" + balance;
};

function addBalance() {

    let amount = document.getElementById("amount").value;
    let balance = Number(localStorage.getItem("walletBalance"));

    if (amount === "" || Number(amount) <= 0) {
        alert("সঠিক Amount লিখুন");
        return;
    }

    balance += Number(amount);

    localStorage.setItem("walletBalance", balance);

    document.getElementById("balance").innerText = "৳" + balance;

    document.getElementById("amount").value = "";

    alert("Balance Added Successfully");
}