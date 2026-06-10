

const API_KEY =
  import.meta.env.VITE_EXERCISE_API_KEY;

const EDAMAM_KEY =
  import.meta.env.VITE_EDAMAM_API_KEY;

const API_HOST = "exercisedb.p.rapidapi.com";

export async function fetchExercises() {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=30&offset=0",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();
  console.log(data);
  return data;
  
}

const EDAMAM_HOST =
  "edamam-food-and-grocery-database.p.rapidapi.com";

export async function fetchNutrition(food) {

  const response = await fetch(
    `https://${EDAMAM_HOST}/api/food-database/v2/parser?ingr=${encodeURIComponent(food)}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": EDAMAM_KEY,
        "X-RapidAPI-Host": EDAMAM_HOST
      }
    }
  );

  if (!response.ok) {

    console.log("Status:", response.status);
  
    const errorText =
      await response.text();
  
    console.log("Error Response:", errorText);
  
    throw new Error(
      `Nutrition API Error ${response.status}`
    );
  }

  return response.json();
}