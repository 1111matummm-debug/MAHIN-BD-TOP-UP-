function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    localStorage.setItem("userEmail", email);

    alert("লগইন সফল হয়েছে!");

    window.location.href = "index.html";
}