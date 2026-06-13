export function workoutCard(workout) {

  const image =
  workout.images?.[0]?.image
    ? workout.images[0].image.startsWith("http")
      ? workout.images[0].image
      : `https://wger.de${workout.images[0].image}`
    : "/images/workout-placeholder.jpg";
  
  console.log(image);

  const name =
    workout.translations?.find(
      t => t.language === 2
    )?.name ||
    workout.translations?.[0]?.name ||
    "Workout";

  const description =
    workout.translations?.find(
      t => t.language === 2
    )?.description_source ||
    "No description available.";

  const category =
    workout.category?.name ||
    "General";

  const equipment =
    workout.equipment?.map(
      item => item.name
    ).join(", ") ||
    "Body Weight";

  const muscles =
    workout.muscles?.map(
      muscle =>
        muscle.name_en || muscle.name
    ).join(", ") ||
    "Not specified";

  return `
    <article class="workout-card">

      <img
        src="${image}"
        alt="${name}"
      >

      <h3>${name}</h3>

      <p>
        <strong>Category:</strong>
        ${category}
      </p>

      <p>
        <strong>Equipment:</strong>
        ${equipment}
      </p>

      <p>
        <strong>Muscles:</strong>
        ${muscles}
      </p>

      <p>
        ${description.substring(0,120)}...
      </p>

    </article>
  `;
}