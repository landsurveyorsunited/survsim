const courses = [
  { title: "Basic Fundamentals", state: "Alabama", duration: "40-50 hours" },
  { title: "Equipment Operations", state: "California", duration: "30-40 hours" },
];

function renderCourses(courseList) {
  const courseGrid = document.getElementById("courses");
  courseGrid.innerHTML = courseList.map(course => `
    <div class="course-card bg-gray-800 rounded-lg p-6">
      <h3 class="text-xl font-bold">${course.title}</h3>
      <p class="text-gray-300">${course.state} - ${course.duration}</p>
    </div>
  `).join("");
}

renderCourses(courses);

function filterCoursesByState(state) {
  const filtered = courses.filter(course => course.state === state);
  renderCourses(filtered);
}