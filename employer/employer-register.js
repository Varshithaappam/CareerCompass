document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const companyName = document.getElementById("company-name").value.trim();
  const email = document.getElementById("employer-email").value.trim();
  const password = document.getElementById("employer-password").value.trim();

  let employers = JSON.parse(localStorage.getItem("employers")) || [];

  if (employers.find(emp => emp.email === email)) {
    alert("This company is already registered!");
    return;
  }

  employers.push({ companyName, email, password });
  localStorage.setItem("employers", JSON.stringify(employers));

  alert("Company registered successfully!");
  window.location.href = "employer-login.html";
});
