// GUTHUB APP

let userImage = document.querySelector(".user-image");
let userName = document.querySelector("h2");
let userCompany = document.querySelector("a");
let userFollowers = document.querySelector(".followers");
let userFollowing = document.querySelector(".following");
let input = document.querySelector("input");
let p = document.querySelector("p");

// Create user display
function handleDisplay(userInfo) {
  if (userInfo.avatar_url) {
    document.querySelector(".hayley").style.display = "block";
    p.style.display = "none";
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;
    userName.innerText = userInfo.name;
    userCompany.innerText = userInfo.company;
    displayFollowers(userInfo.login);
    displayFollowing(userInfo.login);
  } else {
    document.querySelector(".hayley").style.display = "none";
    p.style.display = "block";
  }
}

// Make one function to fetch data repeatedly
function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.error("Something went wrong...");
  };
  xhr.send();
}

// Followers
function displayFollowers(username) {
  userFollowers.innerHTML = "";
  fetch(
    `https://api.github.com/users/${username}/followers`,
    function (followersList) {
      let topFive = followersList.slice(0, 5);
      topFive.forEach((info) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = info.avatar_url;
        img.alt = info.name;
        li.append(img);
        userFollowers.append(li);
      });
    }
  );
}

// Following
function displayFollowing(username) {
  userFollowing.innerHTML = "";
  fetch(
    `https://api.github.com/users/${username}/following`,
    function (followersList) {
      let topFive = followersList.slice(0, 5);
      topFive.forEach((info) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = info.avatar_url;
        img.alt = info.name;
        li.append(img);
        userFollowing.append(li);
      });
    }
  );
}

// Handle Input
function handleChange(event) {
  if (event.keyCode === 13 && input.value) {
    const url = `https://api.github.com/users/`;
    let username = input.value;
    fetch(url + username, handleDisplay);
    input.value = "";
  }
}

input.addEventListener("keydown", handleChange);


// CAT APP

let catImage = document.querySelector(".cat-img");
let button = document.querySelector('button');

function handleClick() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1", function(catInfo) {
        catImage.src = catInfo[0].url;
    });
};

button.addEventListener('click', handleClick);