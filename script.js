// MAHIN BD TOP UP

// Menu Click
document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        alert(this.innerText + " Page Coming Soon");
    });
});

// Product Card Click
document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click",function(){

        let product=this.querySelector("h3").innerText;

        localStorage.setItem("product",product);

        window.location.href="checkout.html";

    });
});