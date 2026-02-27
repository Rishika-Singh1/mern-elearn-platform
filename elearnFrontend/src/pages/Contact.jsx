import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating ⭐");
      return;
    }

    try {
      const response = await fetch("https://mern-elearn-platform.onrender.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, rating, message })
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setMessage("");
        setRating(0);

        // Hide success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const data = await response.json();
        alert(data.message || "Failed to submit feedback");
      }
    } catch (error) {
      console.error("Feedback error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-card">
          <h2>📞 Contact Us</h2>
          <p className="muted">
            Need help? Reach out to us anytime. We’re here to help you learn
            better 🚀
          </p>

          <div className="contact-info">
            <p>
              📧 <span>Email:</span> elearn27/7platform@elearn.com
            </p>
            <p>
              📱 <span>Phone:</span> +91 99999 99999
            </p>
          </div>
        </div>

        {/* Right: Feedback Form */}
        <div className="contact-card">
          <h2>📝 Send Feedback</h2>
          <p className="muted">
            Tell us what you think about E-Learn. Your feedback helps us improve!
          </p>

          {submitted && (
            <div className="success-msg">✅ Thanks! Your feedback was sent.</div>
          )}

          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* ⭐ Rating */}
            <div className="rating-box">
              <p>Your Rating:</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? "star active" : "star"}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Your Feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
