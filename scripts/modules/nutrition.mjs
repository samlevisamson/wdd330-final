import {
    fetchNutrition
  }
  from "../services/api.mjs";
  
  export async function getNutrition(food) {
    return await fetchNutrition(food);
  }