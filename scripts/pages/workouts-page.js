import {
  getWorkouts
}
from "../modules/workouts.mjs";

import {
  workoutCard
}
from "../components/workoutCard.mjs";

let allWorkouts = [];

function displayWorkouts(workouts) {

  const container =
    document.querySelector(
      "#workout-list"
    );

  container.innerHTML =
    workouts
      .map(workoutCard)
      .join("");
}

async function loadWorkouts() {

  allWorkouts =
    await getWorkouts();

  console.log(
    "Workout Count:",
    allWorkouts.length
  );
  console.log(allWorkouts[0]);
  displayWorkouts(allWorkouts);
}

document
  .querySelector(
    "#search-workout"
  )
  .addEventListener(
    "input",
    (event) => {

      const search =
        event.target.value
          .toLowerCase();

      const filtered =
        allWorkouts.filter(
          workout =>
            workout.name
              .toLowerCase()
              .includes(search)
        );

      displayWorkouts(filtered);
    }
  );

loadWorkouts();