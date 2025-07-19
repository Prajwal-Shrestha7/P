document.getElementById("allotment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const boid = document.getElementById("boid").value.trim();
  const issue = document.getElementById("issue").value.trim().toUpperCase();
  const result = document.getElementById("result");

  if (boid.length !== 16) {
    result.textContent = "Invalid BOID. Must be 16 digits.";
    result.style.color = "red";
    return;
  }

  // Simulated result
  result.style.color = "green";
  result.innerHTML = `✅ BOID <strong>${boid}</strong> has been allotted <strong>10 units</strong> of ${issue}.`;
});
