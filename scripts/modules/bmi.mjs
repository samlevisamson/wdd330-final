export function calculateBMI(weight, height) {

    const heightMeters =
      height / 100;
  
    const bmi =
      weight /
      (heightMeters * heightMeters);
  
    return bmi.toFixed(2);
  }
  
  export function getBMICategory(bmi) {
  
    if (bmi < 18.5) {
      return "Underweight";
    }
  
    if (bmi < 25) {
      return "Normal Weight";
    }
  
    if (bmi < 30) {
      return "Overweight";
    }
  
    return "Obese";
  }