import { updateCartCount } from "../modules/cartCounter.mjs";

const isLoggedIn = localStorage.getItem("fitness-auth");

if (!isLoggedIn) {

  window.location.href = "/pages/login/index.html";

}

const currentUser = JSON.parse(localStorage.getItem("current-user"));

if (!currentUser) {

  window.location.href = "/pages/login/index.html";

}

document.querySelector("#profile-name").textContent =
  `${currentUser.firstName} ${currentUser.lastName}`;

document.querySelector("#profile-email").textContent =
  currentUser.email;

/* Load Profile */

const profiles = JSON.parse(localStorage.getItem("fitness-profiles")) || {};

const savedProfile = profiles[currentUser.email];

if (savedProfile) {

  document.querySelector("#height").value =
    savedProfile.height || "";

  document.querySelector("#weight").value =
    savedProfile.weight || "";

  document.querySelector("#goal").value =
    savedProfile.goal || "";

}

/* Save Profile */

document.querySelector("#profile-form")
  .addEventListener("submit", event => {

    event.preventDefault();

    const profile = {

      height: document.querySelector("#height").value,

      weight: document.querySelector("#weight").value,

      goal: document.querySelector("#goal").value

    };

    const profiles =
      JSON.parse(localStorage.getItem("fitness-profiles")) || {};

    profiles[currentUser.email] = profile;

    localStorage.setItem(
      "fitness-profiles",
      JSON.stringify(profiles)
    );

    document.querySelector("#profile-message").textContent =
      "Profile Saved Successfully";

  });

/* Logout */

document.querySelector("#logout-btn")
  .addEventListener("click", () => {

    localStorage.removeItem("fitness-auth");

    localStorage.removeItem("current-user");

    updateCartCount();

    window.location.href =
      "/pages/login/index.html";

  });