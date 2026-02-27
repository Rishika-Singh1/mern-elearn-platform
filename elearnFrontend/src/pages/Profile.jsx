import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  // Password Change State
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!user) {
    return (
      <div className="profile-page">
        <h2 style={{ color: "#38bdf8" }}>No user data found</h2>
      </div>
    );
  }

  // Get enrolled courses data
  const userEnrolledCourses = courses.filter(c => user.enrolledCourses?.includes(c.id));

  const handleUnenroll = async (courseId) => {
    if (!window.confirm("Are you sure you want to drop this course?")) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/unenroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId }),
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
      } else {
        alert(data.message || "Failed to drop course");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
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
        // Update local state and localStorage
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setIsEditingProfile(false);
        alert("Profile updated successfully!");
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleChangePassword = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
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
        setIsChangingPassword(false);
        setCurrentPassword("");
        setNewPassword("");
        alert("Password updated successfully!");
      } else {
        alert(data.message || "Failed to update password");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <div className="avatar-circle">{firstLetter}</div>
          <div>
            <h1>{user.name}</h1>
            <p className="email">{user.email}</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="profile-cards">
          <div className="profile-card">
            <h3>👤 Account Info</h3>
            {isEditingProfile ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="Email"
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button className="profile-btn" onClick={handleUpdateProfile}>Save</button>
                  <button className="profile-btn outline" onClick={() => setIsEditingProfile(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <p>
                  <span>Name:</span> {user.name}
                </p>
                <p>
                  <span>Email:</span> {user.email}
                </p>
              </>
            )}
          </div>

          <div className="profile-card">
            <h3>📊 Learning Stats</h3>
            <p>
              <span>Courses Enrolled:</span> {user.enrolledCourses?.length || 0}
            </p>
            <p>
              <span>Quizzes Attempted:</span> {user.quizzesAttempted || 0}
            </p>
            <p>
              <span>Progress:</span> {Math.min(100, (user.enrolledCourses?.length || 0) * 10 + (user.quizzesAttempted || 0) * 5)}%
            </p>
          </div>

          <div className="profile-card">
            <h3>⚙️ Settings</h3>
            {!isEditingProfile && !isChangingPassword && (
              <>
                <button className="profile-btn" onClick={() => setIsEditingProfile(true)}>
                  Edit Profile
                </button>
                <button className="profile-btn outline" onClick={() => setIsChangingPassword(true)}>
                  Change Password
                </button>
              </>
            )}

            {isChangingPassword && (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  style={inputStyle}
                  placeholder="Current Password"
                />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={inputStyle}
                  placeholder="New Password"
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button className="profile-btn" onClick={handleChangePassword}>Save Password</button>
                  <button className="profile-btn outline" onClick={() => setIsChangingPassword(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ENROLLED COURSES SECTION */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>🎓 My Enrolled Courses</h2>

          {userEnrolledCourses.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {userEnrolledCourses.map(course => (
                <div key={course.id} style={courseCardStyle}>
                  <img src={course.image} alt={course.title} style={courseImageStyle} />
                  <div style={{ padding: "16px", position: "relative" }}>
                    <h4 style={{ color: "#e5e7eb", marginBottom: "8px", fontSize: "1.1rem" }}>{course.title}</h4>
                    <Link to={`/courses/${course.id}`} style={resumeBtnStyle}>
                      ▶ Resume Course
                    </Link>
                    <button
                      onClick={() => handleUnenroll(course.id)}
                      style={{
                        position: "absolute",
                        top: "-130px", // Pull it up into the right corner of the image
                        right: "10px",
                        background: "rgba(239, 68, 68, 0.9)", // Red transparent
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: 1
                      }}
                      title="Drop Course"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px", background: "#09090b", borderRadius: "12px", border: "1px dashed #1e293b" }}>
              <p style={{ color: "#94a3b8", marginBottom: "16px", fontSize: "1.1rem" }}>You haven't enrolled in any courses yet.</p>
              <Link to="/courses" style={exploreBtnStyle}>Explore Courses</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #1e293b",
  background: "#09090b",
  color: "#fff",
};

const courseCardStyle = {
  background: "#09090b",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const courseImageStyle = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderBottom: "1px solid #1e293b"
};

const resumeBtnStyle = {
  display: "block",
  textAlign: "center",
  background: "#38bdf8",
  color: "#18181b",
  padding: "10px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  marginTop: "10px",
  transition: "opacity 0.2s"
};

const exploreBtnStyle = {
  display: "inline-block",
  background: "transparent",
  color: "#38bdf8",
  border: "1px solid #38bdf8",
  padding: "10px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Profile;

