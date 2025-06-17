const searchBtn = document.querySelector(".search");
const avatarBox = document.querySelector(".output-data .circle");
const nameBox = document.querySelector(".output-data .username");
const bioBox = document.querySelector(".output-data .bio");
const reposBox = document.querySelector(".output-data .repos");
const followersBox = document.querySelector(".output-data .followers");
const followingBox = document.querySelector(".output-data .following");

const placeholder = document.querySelector(".output-placeholder");
const dataBox = document.querySelector(".output-data");

searchBtn.addEventListener("click", function () {
  const username = document.getElementById("name").value.trim();

  if (!username) {
    alert("Please enter a username");
    return;
  }

  placeholder.classList.remove("hidden");  // show loading
  dataBox.classList.add("hidden");         // hide old data

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) throw new Error("User not found");
      return response.json();
    })
    .then((data) => {
      // Fill data
      avatarBox.innerHTML = `<img src="${data.avatar_url}" class="w-full h-full object-cover">`;
      nameBox.textContent = data.name || "No Name";
      bioBox.textContent = data.bio || "No Bio Available";
      reposBox.textContent = `Repos: ${data.public_repos}`;
      followersBox.textContent = `Followers: ${data.followers}`;
      followingBox.textContent = `Following: ${data.following}`;

      // Show real data and hide placeholder
      placeholder.classList.add("hidden");
      dataBox.classList.remove("hidden");
    })
    .catch((err) => {
      alert("User not found");
      console.error(err);
    });
});
