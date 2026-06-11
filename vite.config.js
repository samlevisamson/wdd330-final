  import { defineConfig } from "vite";
  import { resolve } from "path";

  export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),

          workouts: resolve(
            __dirname,
            "pages/workouts/index.html"
          ),

          nutrition: resolve(
            __dirname,
            "pages/nutrition/index.html"
          ),

          equipment: resolve(
            __dirname,
            "pages/equipment/index.html"
          ),

          bmi: resolve(
            __dirname,
            "pages/bmi/index.html"
          ),

          cart: resolve(
            __dirname,
            "pages/cart/index.html"
          ),

          profile: resolve(
            __dirname,
            "pages/profile/index.html"
          ),

          checkout: resolve(
            __dirname,
            "pages/checkout/index.html"
          )
        }
      }
    }
  });