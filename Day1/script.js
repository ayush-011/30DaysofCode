const followButton = document.querySelector("button");

followButton.addEventListener("click", () => {
  if (followButton.textContent === "Follow") {
    followButton.textContent = "Following";
    followButton.classList.add("following");
  } else if (followButton.textContent === "Following") {
    followButton.textContent = "Follow";
    followButton.classList.remove("following");
  }
});
