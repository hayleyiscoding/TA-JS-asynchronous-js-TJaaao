let userImage = document.querySelector(".user-image");
let userName = document.querySelector("h2");
let userCompany = document.querySelector("a");
let userFollowers = document.querySelector(".followers");
let userFollowing = document.querySelector(".following");
let input = document.querySelector("input");

function displayUI(data) {
    userImage.src = data.avatar_url;
    userName.innerText = data.name;
    userCompany.innerText = data.company;
    let li = document.createElement('li');
    li.innerText = data.
}

function handleChange(event) {
    console.log(event.keyCode);
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
      xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
      xhr.open("GET", `https://api.github.com/users/${event.target.value}/followers`);
      xhr.open("GET", `https://api.github.com/users/${event.target.value}/following`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log("Something went wrong...");
    };
    xhr.send();
    event.target.value = "";
  }
}

input.addEventListener("keyup", handleChange);
