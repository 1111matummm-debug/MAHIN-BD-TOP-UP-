// Offer Open System

function openOffer(name) {

    document.getElementById("orderPage").style.display = "block";

    document.getElementById("offerName").innerHTML = name + " Selected";

    document.getElementById("paymentPage").style.display = "none";

}



// Payment Page Show

function showPayment() {

    document.getElementById("paymentPage").style.display = "block";

}



// bKash Number Copy

function copyNumber() {

    navigator.clipboard.writeText("আপনার bKash নাম্বার");

    alert("bKash নাম্বার কপি হয়েছে");

}



// Order Submit

function submitOrder(){

    alert("আপনার অর্ডার গ্রহণ করা হয়েছে।");

}
