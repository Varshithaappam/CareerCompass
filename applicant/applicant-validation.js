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
function isValidApplicantName(name) {
  // Only alphabets and at least 3 characters
  const regex = /^[A-Za-z ]{3,}$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isStrongPassword(password) {
  return password.length >= 8;
}

// Handler for applicant registration form
const applicantRegisterForm = document.getElementById("registerForm");

if (applicantRegisterForm) {
  applicantRegisterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("applicant-name").value.trim();
    const email = document.getElementById("applicant-email").value.trim();
    const password = document.getElementById("applicant-password").value.trim();

    let isValid = true;

    if (!isValidApplicantName(name)) {
      showError("name-error", "Name must contain only letters (min 3 characters).");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      showError("email-error", "Enter a valid email address (e.g., user@example.com).");
      isValid = false;
    }

    if (!isStrongPassword(password)) {
      showError("password-error", "Password must be at least 8 characters long.");
      isValid = false;
    }

    if (!isValid) return;

    const applicantsJson = localStorage.getItem("applicants") || "[]";
    const applicants = JSON.parse(applicantsJson);

    if (applicants.find(a => a.email === email)) {
      showError("email-error", "This email is already registered!");
      return;
    }

    applicants.push({ name, email, password });
    localStorage.setItem("applicants", JSON.stringify(applicants));

    const successMsg = document.getElementById("form-success");
    if (successMsg) {
      successMsg.textContent = "Registration successful!";
    }

    applicantRegisterForm.reset();
  });
}

// Handler for applicant login form
const applicantLoginForm = document.getElementById("loginForm");

if (applicantLoginForm) {
  applicantLoginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    let isValid = true;

    if (!isValidEmail(email)) {
      showError("login-email-error", "Enter a valid email address.");
      isValid = false;
    }

    if (!isStrongPassword(password)) {
      showError("login-password-error", "Password must be at least 8 characters long.");
      isValid = false;
    }

    if (!isValid) return;

    const applicantsJson = localStorage.getItem("applicants") || "[]";
    const applicants = JSON.parse(applicantsJson);
    const applicant = applicants.find(a => a.email === email && a.password === password);

    if (applicant) {
      alert(`Welcome, ${applicant.name}!`);
      localStorage.setItem("loggedInApplicant", JSON.stringify(applicant));
      window.location.href = "applicant-dashboard.html";
    } else {
      showError("login-password-error", "Invalid email or password.");
    }
  });
}
