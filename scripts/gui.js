const dogImage = document.querySelector("#dog-image");
const rightButton = document.querySelector("#swipe-right");
const leftButton = document.querySelector("#swipe-left");

function changeImage (newSrc) {
    dogImage.setAttribute("src", newSrc)
}