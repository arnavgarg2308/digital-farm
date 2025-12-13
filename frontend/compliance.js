document.addEventListener("DOMContentLoaded", () => {
  renderCompliance();
});

function renderCompliance() {
  console.log("✅ renderCompliance running...");

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!users.length) {
    document.querySelector("#complianceTable tbody").innerHTML =
      "<tr><td colspan='4'>No farmers found.</td></tr>";
    return;
  }

  // Collect all farmers’ compliance data
  const allFarmers = users
    .filter(u => u.role === "farmer")
    .map(u => {
      // Try both possible keys
      const key1 = `sf_assessment_history_${u.id}`;
      const key2 = `assessments_${u.id}`;

      // Get whichever one exists
      let history = JSON.parse(localStorage.getItem(key1) || "[]");
      if (!history.length) {
        history = JSON.parse(localStorage.getItem(key2) || "[]");
      }

      // Latest assessment
      const latest = history[history.length - 1];
      const score = latest ? (latest.percentage || latest.score || 0) : 0;

      // Decide category + medal
      let category = "High";
      let medal = "Bronze";

      if (score >= 70) {
        category = "Low";
        medal = "Gold";
      } else if (score >= 40) {
        category = "Medium";
        medal = "Silver";
      }

      // ✅ Save for profile page
      localStorage.setItem(`medal_${u.id}`, medal);
      localStorage.setItem(`score_${u.id}`, score);

      console.log(`Saved ${u.name}: ${medal} (${score}%)`);

      // Return full farmer object
      return {
        id: u.id,
        name: u.name || "Unknown",
        score,
        category,
        medal,
        latest
      };
    });

  // Summary counters
  const high = allFarmers.filter(f => f.category === "High").length;
  const medium = allFarmers.filter(f => f.category === "Medium").length;
  const low = allFarmers.filter(f => f.category === "Low").length;
  const avg = allFarmers.length
    ? (allFarmers.reduce((sum, f) => sum + f.score, 0) / allFarmers.length).toFixed(1)
    : 0;

  document.getElementById("highCount").textContent = high;
  document.getElementById("mediumCount").textContent = medium;
  document.getElementById("lowCount").textContent = low;
  document.getElementById("avgScore").textContent = avg + "%";

  // Render the table
  const tbody = document.querySelector("#complianceTable tbody");
  if (!allFarmers.length) {
    tbody.innerHTML = "<tr><td colspan='4'>No data available</td></tr>";
    return;
  }

  tbody.innerHTML = allFarmers
    .map(f => {
      // Add recent assessment info if available
      const recentText = f.latest
        ? `<br><small> ${f.latest.date || ""}</small>`
        : "";

      return `
        <tr>
          <td>${f.name}${recentText}</td>
          <td>${f.score}%</td>
          <td style="color:${
            f.category === "High"
              ? "red"
              : f.category === "Medium"
              ? "orange"
              : "green"
          };">
            ${f.category}
          </td>
          <td>${getMedalIcon(f.medal)}</td>
        </tr>
      `;
    })
    .join("");
}

function getMedalIcon(medal) {
  if (medal === "Gold") return "🥇";
  if (medal === "Silver") return "🥈";
  if (medal === "Bronze") return "🥉";
  return "❌";
}
