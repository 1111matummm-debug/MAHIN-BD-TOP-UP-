function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    // তথ্য ব্রাউজারে সংরক্ষণ (ডেমো)
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("রেজিস্ট্রেশন সফল হয়েছে!");

    window.location.href = "login.html";
}