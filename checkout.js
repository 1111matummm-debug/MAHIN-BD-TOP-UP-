// MAHIN BD TOP UP - Checkout

const amount = document.getElementById("amount");
const copyBtn = document.getElementById("copyBtn");
const verifyBtn = document.getElementById("verifyBtn");
const bkashNumber = document.getElementById("bkashNumber");
const trxid = document.getElementById("trxid");

// Product Amount
let product = localStorage.getItem("product");

if(product=="UID TOPUP"){
    amount.innerText="৳100";
}
else if(product=="WEEKLY"){
    amount.innerText="৳170";
}
else if(product=="MONTHLY"){
    amount.innerText="৳780";
}
else if(product=="DIAMOND"){
    amount.innerText="৳50";
}
else{
    amount.innerText="৳0";
}

// Copy Number
copyBtn.onclick=function(){

navigator.clipboard.writeText(bkashNumber.value);

alert("bKash Number Copied");

}

// Verify
verifyBtn.onclick=function(){

if(trxid.value==""){

alert("Please Enter Transaction ID");

return;

}

alert("Transaction Submitted Successfully");

}