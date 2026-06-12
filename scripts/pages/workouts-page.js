import { getWorkouts } from "../modules/workouts.mjs";
import { workoutCard } from "../components/workoutCard.mjs";

let allWorkouts = [];

function displayWorkouts(workouts) {

  const container = document.querySelector("#workout-list");

  container.innerHTML =
    workouts
      .map(workoutCard)
      .join("");

}

async function loadWorkouts() {

  allWorkouts = await getWorkouts();

  allWorkouts =
    allWorkouts.filter(
      workout =>
        workout.images?.length > 0
    );

  console.log(
    "Workout Count:",
    allWorkouts.length
  );

  console.log(
    JSON.stringify(
      allWorkouts[0],
      null,
      2
    )
  );

  console.log(
    "Image URL:",
    allWorkouts[0]?.images?.[0]?.image
  );

  displayWorkouts(allWorkouts);

}

document
  .querySelector("#search-workout")
  .addEventListener(
    "input",
    event => {

      const search =
        event.target.value
          .toLowerCase();

      const filtered =
        allWorkouts.filter(
          workout => {

            const english =
              workout.translations?.find(
                t => t.language === 2
              );

            return english?.name
              ?.toLowerCase()
              .includes(search);

          }
        );

      displayWorkouts(filtered);

    }
  );

loadWorkouts();