const dogAPI = "https://dog.ceo/api/breeds/image/random";
const catAPI = "https://api.thecatapi.com/v1/images/search?api_key=live_ZyVdmFuU2BzUGjqD0HqrlHRJSpmN4mSlE7Ul2xMab6u9CAJG2TTq3rqYVwl7mTYg ";
let petAPI;
let imageLink;
fetchImage();


function fetchImage () {
    if (Math.random() < 0.51) {
        petAPI = dogAPI;
    }
    else {
        petAPI = catAPI;
    }
    fetch(petAPI)
    .then(response => {
        if (!response.ok) {throw new Error("not ok")};
        return response.json();
    })
    .then(data => {
        if (petAPI === dogAPI) {
            imageLink = data.message;
        }
        if (petAPI === catAPI) {
            imageLink = data[0].url;
    }
    changeImage(imageLink);
} )
.catch(error => {
    console.error ("fetch error!")
})
}
