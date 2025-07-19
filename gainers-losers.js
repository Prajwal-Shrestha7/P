document.addEventListener("DOMContentLoaded", () => {
  const gainers = [
    { name: "Nabil Bank", change: "+7.2%" },
    { name: "NIC Asia", change: "+6.5%" },
    { name: "NLIC", change: "+5.1%" }
  ];

  const losers = [
    { name: "Hydro Co", change: "-4.8%" },
    { name: "Nepal Telecom", change: "-3.9%" },
    { name: "Prabhu Bank", change: "-2.5%" }
  ];

  const gainersList = document.getElementById("gainers-list");
  const losersList = document.getElementById("losers-list");

  gainers.forEach(stock => {
    const li = document.createElement("li");
    li.textContent = `${stock.name} (${stock.change})`;
    gainersList.appendChild(li);
  });

  losers.forEach(stock => {
    const li = document.createElement("li");
    li.textContent = `${stock.name} (${stock.change})`;
    losersList.appendChild(li);
  });
});
