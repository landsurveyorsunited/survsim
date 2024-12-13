const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
const stateSelect = document.getElementById("state-select");
states.forEach(state => {
  const option = document.createElement("option");
  option.value = state;
  option.textContent = state;
  stateSelect.appendChild(option);
});

stateSelect.addEventListener("change", (event) => {
  const selectedState = event.target.value;
  document.getElementById("state-header").textContent = `Explore courses for ${selectedState}`;
  filterCoursesByState(selectedState);
});