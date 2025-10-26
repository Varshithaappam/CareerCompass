function showError(elementId, message) {
  const errorSpan = document.getElementById(elementId);
  if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach(e => e.textContent = "");
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isStrongPassword(password) {
  return password.length >= 8;
}

const employerLoginForm = document.getElementById("employerLoginForm");

if (employerLoginForm) {
  employerLoginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const email = document.getElementById("emp-email").value.trim();
    const password = document.getElementById("emp-password").value.trim();

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

    const employers = JSON.parse(localStorage.getItem("employers") || "[]");
    const employer = employers.find(emp => emp.email === email && emp.password === password);

    if (employer) {
      alert(`Welcome, ${employer.companyName}!`);
      localStorage.setItem("loggedInEmployer", JSON.stringify(employer));
      // Redirect to the job notice page
      window.location.href = "jobnotice.html";
    } else {
      showError("login-password-error", "Invalid email or password.");
    }
  });
}
