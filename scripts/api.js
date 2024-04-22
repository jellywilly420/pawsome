const dogApi = "https://dog.ceo/api/breeds/image/random";
let imageLink;
fetchImage();


function fetchImage () {
    fetch(dogApi)
.then(response => {
    if (!response.ok) {throw new Error("not ok")};
    return response.json();
})
.then(data => {
    imageLink = data.message
    changeImage(imageLink);
} )
.catch(error => {
    console.error ("fetch error!")
})
}
