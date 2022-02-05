let cards = document.querySelectorAll(".ghosts .box");
let stars = document.querySelectorAll(".far.fa-star");
let shadyStars = document.querySelectorAll(".filled.fas.fa-star.shady")
let shadyStarsEmpty = document.querySelectorAll(".far.fa-star.shady")

function allStars() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "filled fas fa-star";
    }
}
function choxStars() {
    for (let i = 0; i < shadyStars.length; i++) {
        shadyStars[i].className = "far fa-star";
    }
}
function choxStarsEmpty() {
    for (let i = 0; i < shadyStarsEmpty.length; i++) {
        shadyStarsEmpty[i].className = "far fa-star shady";
    }
}

for ( let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", allStars);
    cards[i].addEventListener("click", choxStars);
    cards[i].addEventListener("click", choxStarsEmpty);
}