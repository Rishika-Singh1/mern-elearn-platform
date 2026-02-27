import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            🚀 Learn Smarter with <span>E-Learn</span>
          </h1>
          <p>
            Learn modern tech skills with curated courses, videos, notes and
            quizzes. Build your future with step-by-step learning.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/courses")}>
              📚 Explore Courses
            </button>
            <button className="btn-secondary" onClick={() => navigate("/contact")}>
              📞 Contact Us
            </button>
          </div>

          <div className="stats">
            <div className="stat-box">
              <h2>30+</h2>
              <span>Courses</span>
            </div>
            <div className="stat-box">
              <h2>10K+</h2>
              <span>Students</span>
            </div>
            <div className="stat-box">
              <h2>100+</h2>
              <span>Hours Content</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <h3>Why E-Learn?</h3>
          <ul>
            <li>✅ Industry-ready courses</li>
            <li>✅ Notes + Videos + Quizzes</li>
            <li>✅ Track your progress</li>
            <li>✅ Beginner to advanced</li>
          </ul>
          <button className="btn-primary" onClick={() => navigate("/courses")}>
            Start Learning Now →
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card" onClick={() => navigate("/courses")}>
          <h3>📚 Explore Courses</h3>
          <p>Browse all available courses and start learning today.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/Profile")}>
          <h3>🎯 Track Progress</h3>
          <p>Take quizzes and track your learning journey easily.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/contact")}>
          <h3>💬 24/7 Support</h3>
          <p>Need help? Our support team is always ready for you.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
