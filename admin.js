// MAHIN BD TOP UP - Admin Panel

window.onload = function () {

    let totalOrders = localStorage.getItem("totalOrders") || 0;
    let totalUsers = localStorage.getItem("totalUsers") || 0;

    console.log("Total Orders: " + totalOrders);
    console.log("Total Users: " + totalUsers);

};

function clearOrders() {

    if (confirm("সব অর্ডার মুছে ফেলতে চান?")) {

        localStorage.removeItem("product");
        localStorage.removeItem("price");
        localStorage.removeItem("totalOrders");

        alert("সব অর্ডার মুছে ফেলা হয়েছে");
    }

}

function logoutAdmin() {

    alert("Admin Logout Successful");

    window.location.href = "login.html";

}