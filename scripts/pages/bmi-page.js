import {
    calculateBMI,
    getBMICategory
  }
  from "../modules/bmi.mjs";
  
  const form =
    document.querySelector("#bmi-form");
  
  const result =
    document.querySelector("#bmi-result");
  
  form.addEventListener(
    "submit",
    (event) => {
  
      event.preventDefault();
  
      const weight =
        Number(
          document.querySelector("#weight")
            .value
        );
  
      const height =
        Number(
          document.querySelector("#height")
            .value
        );
  
      const bmi =
        calculateBMI(
          weight,
          height
        );
  
      const category =
        getBMICategory(bmi);
  
      result.innerHTML = `
        <div class="bmi-card">
  
          <h2>
            BMI: ${bmi}
          </h2>
  
          <p>
            Category:
            ${category}
          </p>
  
        </div>
      `;
    }
  );