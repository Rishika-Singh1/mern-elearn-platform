import { useNavigate } from "react-router-dom";
import "../pages/Courses.css";


function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-body">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-meta">
          <span className="tag">{course.category}</span>
          <span className="rating">⭐ {course.rating || "4.5"}</span>
        </div>

        <div className="course-footer">
          <span className="price">₹{course.price}</span>
          <button onClick={() => navigate(`/courses/${course.id}`)}>
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;



