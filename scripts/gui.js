const petImage = document.querySelector("#pet-image");
const rightButton = document.querySelector("#swipe-right");
const leftButton = document.querySelector("#swipe-left");

function changeImage (newSrc) {
    petImage.setAttribute("src", newSrc)
}