const getStartedBtn = document.querySelector("#get-started-btn");

const currentUser = JSON.parse(localStorage.getItem("current-user"));

if (getStartedBtn) {

  if (currentUser) {

    getStartedBtn.textContent = "Check Workouts";

    getStartedBtn.href = "/pages/workouts/index.html";

  } else {

    getStartedBtn.textContent = "Get Started";

    getStartedBtn.href = "/pages/login/index.html";

  }

}

console.log("Home JS Loaded");

console.log(
  JSON.parse(
    localStorage.getItem(
      "current-user"
    )
  )
);