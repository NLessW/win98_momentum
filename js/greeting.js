document.addEventListener("DOMContentLoaded", function () {
  const clockElement = document.querySelector("#clock");
  const loginForm = document.querySelector("#login-form");
  const greeting = document.querySelector("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  loginForm.innerHTML = `
    <h2>System Login</h2>
    <input type="text" placeholder="Enter username" required>
    <button type="submit">Login</button>
  `;

  const loginInput = loginForm.querySelector("input");

  function handleLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintingGreeting(username);
  }

  function getGreetingByTime() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
      return "Good Evening";
    } else {
      return "Good Night\nThank you for today.";
    }
  }
  function paintingGreeting(username) {
    function updateGreeting() {
      const timeGreeting = getGreetingByTime();
      greeting.innerText = `Welcome, ${username}\n${timeGreeting}`;
    }

    updateGreeting();
    greeting.classList.remove(HIDDEN_CLASSNAME);

    setInterval(updateGreeting, 60000);
  }
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
  } else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintingGreeting(savedUsername);
  }
});
