// Utility to show and clear errors
function showError(elementId, message) {
  const errorSpan = document.getElementById(elementId);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach(e => { e.textContent = ""; });
  const successMsg = document.getElementById("form-success");
  if (successMsg) successMsg.textContent = "";
}

// Validation functions
function isValidCompanyName(name) {
  const regex = /^(?=.*[A-Za-z])[A-Za-z0-9\s]{2,}$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isStrongPassword(password) {
  return password.length >= 8;
}

// Handler for registration form
const employerRegisterForm = document.getElementById("registerForm");

if (employerRegisterForm) {
  employerRegisterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const companyName = document.getElementById("company-name").value.trim();
    const email = document.getElementById("employer-email").value.trim();
    const password = document.getElementById("employer-password").value.trim();

    let isValid = true;

    if (!isValidCompanyName(companyName)) {
      showError("company-error", "Company name must have at least one alphabet. Numbers are allowed.");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      showError("email-error", "Enter a valid email address (e.g., company@example.com).");
      isValid = false;
    }

    if (!isStrongPassword(password)) {
      showError("password-error", "Password must be at least 8 characters long.");
      isValid = false;
    }

    if (!isValid) return;

    const employersJson = localStorage.getItem("employers") || "[]";
    const employers = JSON.parse(employersJson);

    if (employers.find(e => e.email === email)) {
      showError("email-error", "This email is already registered!");
      return;
    }

    employers.push({ companyName, email, password });
    localStorage.setItem("employers", JSON.stringify(employers));

    const successMsg = document.getElementById("form-success");
    if (successMsg) {
      successMsg.textContent = "Email is registered successfully!";
    }

    // Optionally clear form fields after success
    employerRegisterForm.reset();
  });
}
