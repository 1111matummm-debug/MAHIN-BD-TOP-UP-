function buyNow(productName, price) {

    // নির্বাচিত প্যাকেজ সংরক্ষণ
    localStorage.setItem("product", productName);
    localStorage.setItem("price", price);

    // Checkout পেজে যাও
    window.location.href = "checkout.html";
}

// Checkout পেজে দাম দেখানো
window.onload = function () {

    let amount = document.getElementById("amount");

    if (amount) {
        let price = localStorage.getItem("price");

        if (price) {
            amount.innerHTML = "৳" + price;
        }
    }
};