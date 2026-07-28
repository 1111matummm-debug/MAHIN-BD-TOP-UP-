// MAHIN BD TOP UP - Orders

window.onload = function () {

    let product = localStorage.getItem("product");
    let price = localStorage.getItem("price");

    if (product) {
        document.getElementById("productName").innerText = product;
    } else {
        document.getElementById("productName").innerText = "No Order Found";
    }

    if (price) {
        document.getElementById("productPrice").innerText = "৳" + price;
    } else {
        document.getElementById("productPrice").innerText = "৳0";
    }

};