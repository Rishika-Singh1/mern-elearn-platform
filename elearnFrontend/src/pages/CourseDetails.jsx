import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data";
import { useState, useEffect } from "react";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");

  if (!course) {
    return (
      <div style={{ padding: "60px", color: "#7f3fe6" }}>
        <h2>Course not found</h2>
        <button onClick={() => navigate("/courses")}>Back to Courses</button>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses?.includes(course.id) || false;

  const handleEnroll = async () => {
    if (!user) {
      alert("Please login to enroll");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("https://mern-elearn-platform.onrender.com/api/user/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId: course.id }),
      });

      const data = await res.json();
      if (res.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (res.ok) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("🎉 You have successfully enrolled in this course!");
      } else {
        alert(data.message || "Enrollment failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleUnenroll = async () => {
    if (!user) return;

    try {
      const res = await fetch("https://mern-elearn-platform.onrender.com/api/user/unenroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId: course.id }),
      });

      const data = await res.json();
      if (res.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (res.ok) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("You have dropped this course.");
      } else {
        alert(data.message || "Unenrollment failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleOptionSelect = (opt) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: opt,
    }));
  };

  const handleQuizSubmit = async () => {
    if (!user) {
      alert("Please login to submit quiz");
      return;
    }

    let correct = 0;

    course.quiz.forEach((q, index) => {
      if (answers[index] === q.answer) {
        correct++;
      }
    });

    setScore(correct);

    try {
      const res = await fetch("https://mern-elearn-platform.onrender.com/api/user/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (res.ok) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("🎉 Quiz submitted successfully!");
      } else {
        alert(data.message || "Failed to submit quiz");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px 60px", color: "#e5e7eb", maxWidth: "1200px", margin: "0 auto" }}>
      {/* HERO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1 style={{ color: "#38bdf8", fontSize: "2.6rem", marginBottom: "10px" }}>
            {course.title}
          </h1>
          <p style={{ color: "rgb(239, 240, 246)", fontSize: "1.1rem", marginBottom: "20px" }}>
            {course.description}
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
            <span style={badge}>⭐ {course.rating || 4.5}</span>
            <span style={badge}>👥 {course.students || 1200}+ students</span>
            <span style={badge}>🏷️ {course.category}</span>
            <span style={badge}>💰 {course.price || "Free"}</span>
          </div>

          <div style={{ display: "flex", gap: "14px" }}>
            <a href={course.youtube} target="_blank" rel="noreferrer" style={primaryBtn}>
              ▶ Watch on YouTube
            </a>
            <a href={course.notes} target="_blank" rel="noreferrer" style={outlineBtn}>
              📄 Open Notes
            </a>
          </div>
        </div>

        {/* SIDE CARD */}
        <div style={sideCard}>
          <h3 style={{ color: "#38bdf8", marginBottom: "10px" }}>📘 This course includes</h3>
          <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
            <li>✔ Full video access</li>
            <li>✔ Notes & documentation</li>
            <li>✔ Quiz & practice</li>
            <li>✔ Beginner to advanced</li>
          </ul>

          {isEnrolled ? (
            <button
              style={{ ...outlineBtn, borderColor: "#ef4444", color: "#ef4444" }}
              onClick={handleUnenroll}
            >
              Drop Course
            </button>
          ) : (
            <button
              style={primaryBtn}
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>

      {/* CONTENT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "30px",
        }}
      >
        {/* CHAPTERS */}
        <div style={card}>
          <h3 style={cardTitle}>📚 Course Content</h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.9" }}>
            {course.chapters.map((ch, i) => (
              <li key={i}>📌 {ch}</li>
            ))}
          </ul>
        </div>

        {/* QUIZ */}
        <div style={card}>
          <h3 style={cardTitle}>📝 Quick Quiz</h3>

          {score === null ? (
            <>
              <div style={{ marginBottom: "20px" }}>
                <p style={{ marginBottom: "10px", fontWeight: "bold", color: "#38bdf8" }}>
                  Question {currentQuestionIndex + 1} of {course.quiz.length}
                </p>
                <p style={{ marginBottom: "15px", fontSize: "1.05rem" }}>
                  {course.quiz[currentQuestionIndex].question}
                </p>
                {course.quiz[currentQuestionIndex].options.map((opt, j) => (
                  <label
                    key={j}
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      cursor: "pointer",
                      background: answers[currentQuestionIndex] === opt ? "rgba(56, 189, 248, 0.15)" : "#09090b",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: answers[currentQuestionIndex] === opt ? "1px solid #38bdf8" : "1px solid #1e293b",
                      transition: "0.2s"
                    }}
                  >
                    <input
                      type="radio"
                      name={`q${currentQuestionIndex}`}
                      value={opt}
                      checked={answers[currentQuestionIndex] === opt}
                      onChange={() => handleOptionSelect(opt)}
                      style={{ marginRight: "10px", accentColor: "#38bdf8" }}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <button
                  style={{ ...outlineBtn, opacity: currentQuestionIndex === 0 ? 0.5 : 1, cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer", padding: "8px 14px" }}
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                >
                  Previous
                </button>

                {currentQuestionIndex < course.quiz.length - 1 ? (
                  <button
                    style={{ ...primaryBtn, padding: "8px 14px" }}
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button onClick={handleQuizSubmit} style={{ ...primaryBtn, padding: "8px 14px" }}>
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>Quiz Completed!</h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                You scored <strong style={{ color: "#22c55e" }}>{score}</strong> out of {course.quiz.length}
              </p>
              <button
                style={{ ...outlineBtn, padding: "10px 16px" }}
                onClick={() => {
                  setScore(null);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BACK */}
      <div style={{ marginTop: "40px" }}>
        <button onClick={() => navigate("/courses")} style={outlineBtn}>
          ← Back to Courses
        </button>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const card = {
  background: "#09090b",
  border: "1px solid #1e293b",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "0 0 20px rgba(56,189,248,0.08)",
};

const sideCard = {
  ...card,
  height: "fit-content",
};

const cardTitle = {
  color: "#38bdf8",
  marginBottom: "14px",
};

const badge = {
  background: "#09090b",
  border: "1px solid #1e293b",
  borderRadius: "20px",
  padding: "6px 14px",
  fontSize: "0.9rem",
};

const primaryBtn = {
  display: "inline-block",
  padding: "12px 18px",
  background: "#38bdf8",
  color: "#09090b",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",
};

const outlineBtn = {
  display: "inline-block",
  padding: "12px 18px",
  background: "#38bdf8",
  color: "#1e2021",
  border: "1px solid rgb(62, 135, 166)",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
};

export default CourseDetails;





