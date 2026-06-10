import {
    getWorkouts
  }
  from "../modules/workouts.mjs";
  
  import {
    workoutCard
  }
  from "../components/workoutCard.mjs";
  
  async function loadWorkouts() {
  
    const workouts =
      await getWorkouts();
  
    const container =
      document.querySelector(
        "#workout-list"
      );
  
    container.innerHTML =
      workouts
        .map(workoutCard)
        .join("");
  }
  
  loadWorkouts();