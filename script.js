const messages = ["Welcome to Bata!", "50% Off on Shoes!", "RS 100 on delivery will charge", "New Collection Out Now!"];
let index = 0;
setInterval(() => {
    document.getElementsByClassName("datachange")[0].innerHTML = messages[index];
    index = (index + 1) % messages.length;

}, 2000)
//the code for buttons
document.addEventListener("DOMContentLoaded", function () {
    const mainCards = document.querySelectorAll(".main-card");
    const btnLefts = document.querySelectorAll(".card-btn-left");
    const btnRights = document.querySelectorAll(".card-btn-right");
    const scrollAmount = 300;

    mainCards.forEach((mainCard, index) => {
        btnLefts[index].addEventListener("click", function () {
            mainCard.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        btnRights[index].addEventListener("click", function () {
            mainCard.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
});

//the code for buttons of brands
document.addEventListener("DOMContentLoaded", function () {
    const mainCards = document.querySelectorAll(".b-sidebar");
    const btnLefts = document.querySelectorAll(".brandspic-btn-left");
    const btnRights = document.querySelectorAll(".brandspic-btn-right");
    const scrollAmount = 300;

    mainCards.forEach((mainCard, index) => {
        btnLefts[index].addEventListener("click", function () {
            console.log("right button clixked")
            mainCard.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        btnRights[index].addEventListener("click", function () {
            console.log("right button clixked")
            mainCard.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
});
// Sticky navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 0) {
    navbar.classList.add('sticky-navbar');
    
  } else {
    navbar.classList.remove('sticky-navbar');
    
  }
});