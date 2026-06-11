export function renderFooter() {
  return `
    <footer>

      <div class="footer-container">

        <div class="footer-brand">

          <img
            src="/images/logo.png"
            alt="Fitness Hub Logo"
            class="footer-logo">

          <p>
            Your fitness journey starts here.
            We provide the best plans, tools,
            and support to help you achieve
            your goals.
          </p>

          <div class="social">

            <a href="https://github.com/samlevisamson" target="_blank">
              <img src="/images/github.webp" alt="GitHub">
            </a>

            <a href="https://www.linkedin.com/in/sam-levi-samson-2784273b6/" target="_blank">
              <img src="/images/linkedin.webp" alt="LinkedIn">
            </a>

            <a href="https://x.com/home" target="_blank">
              <img src="/images/twitter.webp" alt="Twitter">
            </a>

          </div>

        </div>

        <div class="footer-column">

          <h3>Quick Links</h3>

          <a href="/index.html">Home</a>
          <a href="/pages/workouts/index.html">Workouts</a>
          <a href="/pages/nutrition/index.html">Nutrition</a>
          <a href="/pages/equipment/index.html">Equipment Store</a>

        </div>

        <div class="footer-column">

          <h3>Resources</h3>

          <a href="/pages/bmi/index.html">BMI Calculator</a>
          <a href="/pages/profile/index.html">Profile</a>
          <a href="/pages/cart/index.html">Shopping Cart</a>

        </div>

        <div class="footer-column">

          <h3>Newsletter</h3>

          <p>
            Subscribe to get the latest
            fitness tips and updates.
          </p>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email">

          <button id="subscribe-btn">
            Subscribe
          </button>

        </div>

      </div>

      <div class="footer-bottom">

        <p>
          © <span id="currentyear"></span>
          Fitness Hub
        </p>

        <p id="lastModified"></p>

      </div>

      <div id="subscribe-modal" class="modal">

      <div class="modal-content">

        <h2>Thank You!</h2>

        <p>
          Thank you for subscribing to Fitness Hub.
        </p>

        <button id="close-modal">
          Close
        </button>

      </div>

    </div>
      
    </footer>
  `;
}