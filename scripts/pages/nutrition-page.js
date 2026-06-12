import {
    getNutrition
  }
  from "../modules/nutrition.mjs";

import {
    fetchMealPlan
  }
  from "../services/api.mjs";
  
  const form =
    document.querySelector(
      "#nutrition-form"
    );
  
  const results =
    document.querySelector(
      "#nutrition-results"
    );
  
  form.addEventListener(
    "submit",
    async (event) => {
  
      event.preventDefault();
  
      try {
  
        const food =
          document.querySelector(
            "#food-input"
          ).value;
  
        const data =
          await getNutrition(food);
  
        const item =
          data.hints?.[0]?.food;
  
        if (!item) {
  
          results.innerHTML =
            "<p>No results found.</p>";
  
          return;
        }
  
        results.innerHTML = `
          <div class="nutrition-card">
            <h2>${item.label}</h2>
            <p><strong>Serving Size:</strong> 100 g</p>
            <hr>
            <p><strong>Calories:</strong> ${item.nutrients.ENERC_KCAL || 0}</p>
            <p><strong>Protein:</strong> ${item.nutrients.PROCNT || 0} g</p>
            <p><strong>Carbs:</strong> ${item.nutrients.CHOCDF || 0} g</p>
            <p><strong>Fat:</strong> ${item.nutrients.FAT || 0} g</p>
          </div>
        `;
  
      } catch (error) {
  
        console.error(
          "Nutrition Error:",
          error
        );
  
        results.innerHTML =
          "<p>Unable to load nutrition data.</p>";
  
      }
    }
  );

  /* =========================
   MEAL PLANS
========================= */

const mealPlans = {

    balanced: {
      breakfast:
        "Oatmeal, Banana, Milk",
      lunch:
        "Chicken Rice Bowl",
      dinner:
        "Fish and Vegetables"
    },
  
    "high-protein": {
      breakfast:
        "Eggs, Greek Yogurt",
      lunch:
        "Chicken Breast and Rice",
      dinner:
        "Salmon and Sweet Potato"
    },
  
    "low-carb": {
      breakfast:
        "Egg Omelette",
      lunch:
        "Chicken Salad",
      dinner:
        "Steak and Vegetables"
    }
  
  };
  
  /* =========================
     MEAL PLANNER
  ========================= */
  
  const mealButton =
  document.querySelector(
    "#generate-meal-plan"
  );

const mealResults =
  document.querySelector(
    "#meal-results"
  );

mealButton?.addEventListener(
  "click",
  () => {

    const goal =
      document.querySelector(
        "#meal-goal"
      ).value;

    const plan =
      mealPlans[goal];

    mealResults.innerHTML = `
      <div class="meal-plan-card">

        <h3>
          ${goal
            .replace("-", " ")
            .toUpperCase()}
        </h3>

        <p>
          <strong>Breakfast:</strong>
          ${plan.breakfast}
        </p>

        <p>
          <strong>Lunch:</strong>
          ${plan.lunch}
        </p>

        <p>
          <strong>Dinner:</strong>
          ${plan.dinner}
        </p>

      </div>
    `;
  }
);