export default async function handler(req, res) {
  if (req.method === "POST") {
    const { state } = req.body;
    const filteredCourses = courses.filter(course => course.state === state);
    res.status(200).json({ courses: filteredCourses });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}