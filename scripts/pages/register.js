const form =
  document.querySelector(
    "#register-form"
  );

const message =
  document.querySelector(
    "#register-message"
  );

form?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const firstName =
      document.querySelector(
        "#first-name"
      ).value;

    const lastName =
      document.querySelector(
        "#last-name"
      ).value;

    const email =
      document.querySelector(
        "#email"
      ).value;

    const password =
      document.querySelector(
        "#password"
      ).value;

    const confirmPassword =
      document.querySelector(
        "#confirm-password"
      ).value;

    if (
      password !==
      confirmPassword
    ) {

      message.textContent =
        "Passwords do not match.";

      return;
    }

    const user = {
        firstName,
        lastName,
        email,
        password
      };
      
      const users =
        JSON.parse(
          localStorage.getItem(
            "fitness-users"
          )
        ) || [];
      
      /* Prevent duplicate email */
      
      const existingUser =
        users.find(
          user =>
            user.email === email
        );
      
      if (existingUser) {
      
        message.textContent =
          "Email already registered.";
      
        return;
      
      }
      
      users.push(user);
      
      localStorage.setItem(
        "fitness-users",
        JSON.stringify(users)
      );

    message.textContent =
      "Registration successful!";

    setTimeout(() => {

      window.location.href =
        "/pages/login/index.html";

    }, 1500);

  }
);