const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "WDD 330", name: "Frontend Development II", credits: 3, completed: false },
  { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false }
];

const courseContainer = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  courseContainer.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("done");
    }

    div.textContent = `${course.code} - ${course.name}`;
    courseContainer.appendChild(div);
  });

  const credits = list.reduce((sum, c) => sum + c.credits, 0);
  totalCredits.textContent = `Total Credits: ${credits}`;
}

displayCourses(courses);

document.querySelectorAll(".course-filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      displayCourses(courses);
    } else {
      displayCourses(
        courses.filter(course =>
          course.code.startsWith(filter.toUpperCase())
        )
      );
    }
  });
});
