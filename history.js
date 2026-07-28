// MAHIN BD TOP UP - History

window.onload = function () {

    let product = localStorage.getItem("product");
    let price = localStorage.getItem("price");

    if (product) {
        document.getElementById("historyProduct").innerText = product;
    } else {
        document.getElementById("historyProduct").innerText = "No Transaction";
    }

    if (price) {
        document.getElementById("historyPrice").innerText = "৳" + price;
    } else {
        document.getElementById("historyPrice").innerText = "৳0";
    }

};