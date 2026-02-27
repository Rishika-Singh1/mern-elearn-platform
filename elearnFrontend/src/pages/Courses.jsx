import { useState } from "react";
import { courses } from "../data";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

function Courses() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>All Courses</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;


