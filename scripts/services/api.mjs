
const WGER_API_KEY =
  import.meta.env.VITE_WGER_API_KEY;

const EDAMAM_KEY =
  import.meta.env.VITE_EDAMAM_API_KEY;

const EDAMAM_APP_ID =
  import.meta.env.VITE_EDAMAM_APP_ID;

const EDAMAM_MEAL_KEY =
  import.meta.env.VITE_EDAMAM_MEAL_KEY; 


export async function fetchExercises() {

  const response =
    await fetch(
      "https://wger.de/api/v2/exerciseinfo/?limit=20",
      {
        headers: {
          Authorization:
            `Token ${WGER_API_KEY}`
        }
      }
    );

  if (!response.ok) {

    throw new Error(
      "Failed to fetch exercises"
    );

  }

  const data = await response.json();

  data.results.forEach(workout => {

    if (workout.images?.length > 0) {
  
      const english =
        workout.translations?.find(
          t => t.language === 2
        );
  
      console.log(
        english?.name,
        "Style:",
        workout.images[0].style
      );
  
    }
  
  });

  return data.results.filter(
    workout =>
      workout.images?.length > 0 &&
      workout.translations?.some(
        translation =>
          translation.language === 2
      ) &&
      !workout.images[0].image.includes("trx")
  );

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



export async function fetchMealPlan() {

  console.log(
    "APP ID:",
    EDAMAM_APP_ID
  );
  
  console.log(
    "MEAL KEY:",
    EDAMAM_MEAL_KEY
  );

  const response = await fetch(
    `https://api.edamam.com/api/meal-planner/v1/samlevisamson/select?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_MEAL_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Edamam-Account-User": "samlevisamson"
      },
      body: JSON.stringify({
        size: 3,
        plan: {
          accept: {
            all: []
          },
          fit: {
            ENERC_KCAL: {
              min: 1800,
              max: 2500
            }
          }
        }
      })
    }
  );

  const data =
     await response.json();

  console.log(
    "Status:",
    response.status
  );

  console.log(data.errors?.[0]);

  return data;
}