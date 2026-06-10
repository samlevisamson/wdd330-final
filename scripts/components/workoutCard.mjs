export function workoutCard(workout) {
    return `
      <article class="workout-card">
  
        <img
          src="${workout.gifUrl}"
          alt="${workout.name}"
        >
  
        <h3>${workout.name}</h3>
  
        <p>
          Target:
          ${workout.target}
        </p>
  
        <p>
          Equipment:
          ${workout.equipment}
        </p>
  
      </article>
    `;
  }