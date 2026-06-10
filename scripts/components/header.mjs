export function renderHeader() {
  return `
    <header class="site-header">
      <div class="logo">Fitness Hub</div>

      <nav>
        <a href="/index.html">Home</a>
        <a href="/pages/workouts/index.html">Workouts</a>
        <a href="/pages/nutrition/index.html">Nutrition</a>
        <a href="/pages/equipment/index.html">Equipment</a>
        <a href="/pages/bmi/index.html">BMI</a>
        <a href="/pages/profile/index.html">Profile</a>
        <a
          id="cart-link"
          href="/pages/cart/index.html"
          class="cart-container"
        >
          🛒
          <span
            id="cart-count"
            class="cart-count"
          >
            0
          </span>
        </a>
      </nav>
    </header>
  `;
}