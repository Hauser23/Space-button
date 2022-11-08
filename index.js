const btn = document.querySelector(".btn-click");
const show = document.querySelector(".show");
const card = document.querySelector(".card");
const closeCard = document.querySelector(".close");

btn.addEventListener('click', function(){
    //Close Menu
    card.classList.toggle('show');
});

closeCard.addEventListener('click', function(){
    //Close Menu
    card.classList.toggle('show');
});

