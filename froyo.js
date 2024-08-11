const observedFlavors = {};

function countFlavors(flavorArray) {
  const flavorCounts = {};
  flavorArray.forEach((flavor) => {
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  });
  return flavorCounts;
}

function updateObservedFlavors(flavorArray) {
    flavorArray.forEach(flavor => {
        if (!observedFlavors[flavor]) {
        observedFlavors[flavor] = true;
        }
    });
}

function displayResults(flavorCounts) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2>Froyo Order Summary:</h2>";

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  thead.innerHTML = `
        <tr>
            <th>Flavor</th>
            <th>Count</th>
        </tr>
    `;
  table.appendChild(thead);

  for (const [flavor, count] of Object.entries(flavorCounts)) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${flavor}</td>
            <td>${count}</td>
        `;
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  resultsDiv.appendChild(table);

  const observedDiv = document.createElement('div');
  observedDiv.innerHTML = '<h2>Observed Flavors:<h2>';
  const observedList = document.createElement('ul');

  for (const flavor in observedFlavors) {
    const listItem = document.createElement('li');
    listItem.textContent = flavor;
    observedList.appendChild(listItem);
  }
  observedDiv.appendChild(observedList);
  resultsDiv.appendChild(observedDiv);
}

window.addEventListener("load", () => {
  const userInput = prompt("Enter a list of comma-separated froyo flavors:");

  if (userInput) {
    const flavorArray = userInput
      .split(",")
      .map((flavor) => flavor.trim().toLowerCase());

      updateObservedFlavors(flavorArray);

    const flavorCounts = countFlavors(flavorArray);

    displayResults(flavorCounts);
  }
});
