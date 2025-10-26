document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("applicant-name").value.trim();
  const email = document.getElementById("applicant-email").value.trim();
  const password = document.getElementById("applicant-password").value.trim();

  let applicants = JSON.parse(localStorage.getItem("applicants")) || [];

  if (applicants.find(app => app.email === email)) {
    alert("Email is already registered!");
    return;
  }

  applicants.push({ name, email, password });
  localStorage.setItem("applicants", JSON.stringify(applicants));
  document.getElementById("form-success").textContent = "Registration successful!";
  alert("Registration successful!");
  window.location.href = "applicant-login.html";
});
