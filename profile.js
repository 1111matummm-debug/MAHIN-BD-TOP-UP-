// MAHIN BD TOP UP - Profile

window.onload = function () {

    let name = localStorage.getItem("userName");
    let email = localStorage.getItem("userEmail");

    if (name) {
        document.getElementById("userName").innerText = name;
    }

    if (email) {
        document.getElementById("userEmail").innerText = email;
    }

};

function logout() {

    if (confirm("আপনি কি Logout করতে চান?")) {

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");

        alert("Logout Successful");

        window.location.href = "login.html";
    }

}