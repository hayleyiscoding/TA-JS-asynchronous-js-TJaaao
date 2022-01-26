const input = document.querySelector("input");
const img = document.querySelector("img");
const inputDiv = document.querySelector(".input-div");
const imageDiv = document.querySelector(".image-div");

// Put event listener on search box
input.addEventListener("keyup", (event) => {
  //when you press enter, do this:
  if (event.keyCode === 13) {
    // Clear previous images
    imageDiv.innerHTML = "";
    // Do XML HTTTP Request
    let xhr = new XMLHttpRequest();

    // Get the data - add event.target.value as search term in url
    xhr.open(
      "GET",
      `https://api.unsplash.com/search/photos/?client_id=FcBFX71uSlv9Sewn1t1bMFfZ6_xH2P3-jqgyPZS7I34&query=${event.target.value})`
    );

    xhr.onload = function () {
      let imageData = JSON.parse(xhr.response);
      // Search returns an array of objects. Need to loop through the array with map and return an array that just has the urls.
      let searchUrls = imageData.results.map((element) => {
        return element.urls.small;
      });

      // loop through all the urls in the new array and create an image element for each one and append it to the main div.
      searchUrls.forEach((element, index) => {
        let image = document.createElement("img");
        image.src = searchUrls[index];
        imageDiv.append(image);
      });

      //   Clear the search value
      input.value = "";
    };

    //   Error Message
    xhr.onerror = function () {
      alert("Something went wrong");
    };
    // Send
    xhr.send();
  }
});

// FcBFX71uSlv9Sewn1t1bMFfZ6_xH2P3-jqgyPZS7I34 Access key
// J8ICoJUCvLhupRYNvXO2xU80i3ql61UJykK4tPBnzUU Secret Key
// https://api.unsplash.com/ Main Api URL (in Schema of documentation) ONE
// /photos/random TWO  (search for what you want to d0)
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY THREE (search for Auth in documentation)
