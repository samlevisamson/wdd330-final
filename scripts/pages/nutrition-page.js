import {
    getNutrition
  }
  from "../modules/nutrition.mjs";
  
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

    console.log("Nutrition Data:", data);

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

    console.error("Nutrition Error:", error);

    results.innerHTML =
        "<p>Unable to load nutrition data.</p>";

    }
}
);