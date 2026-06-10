import { fetchExercises }
  from "../services/api.mjs";

export async function getWorkouts() {
  return await fetchExercises();
}