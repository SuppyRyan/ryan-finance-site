// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Revenue Simulator
const ctx = document.getElementById("revenueChart");
let chart;

function buildChart(rate) {
  let revenue = 5;
  let data = [];
  for (let i = 0; i < 5; i++) {
    revenue *= (1 + rate/100);
    data.push(revenue.toFixed(1));
  }

  if(chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Year1","Year2","Year3","Year4","Year5"],
      datasets: [{
        label: "Revenue ($M)",
        data: data,
        borderColor: "#3b82f6"
      }]
    }
  });
}

document.getElementById("growth").addEventListener("input", function(){
  buildChart(this.value);
});

buildChart(6);

// Live Stock API (Alpha Vantage demo)
fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=demo")
  .then(res => res.json())
  .then(data => {
    document.getElementById("stockData").innerHTML =
      "SPY Price: $" + data["Global Quote"]["05. price"];
  });
