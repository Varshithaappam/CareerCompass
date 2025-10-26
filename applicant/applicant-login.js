document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const applicants = JSON.parse(localStorage.getItem("applicants")) || [];
  const user = applicants.find(app => app.email === email && app.password === password);

  if (user) {
    alert(`Welcome, ${user.name}!`);
    localStorage.setItem("loggedInApplicant", JSON.stringify(user));
    window.location.href = "../jobs.html";
  } else {
    alert("Invalid email or password.");
  }
});
