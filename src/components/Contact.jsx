import { useState } from "react";
import "./Contact.css";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
     const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ps-contact" id="contact">
      <div className="ps-contact-wrap">
        <div className="ps-contact-content" data-aos="fade-right">
          <h2>Let’s Connect and Build Opportunities Together</h2>

          <p>
            Reach out to PS Group for business enquiries, partnerships,
            collaborations, and service-related requirements across our business
            verticals.
          </p>

          <div className="ps-contact-info">
            <div className="ps-contact-item">
              <FiMapPin />
              <div>
                <p>
                  1st Floor Jayalakshmi Arcade, 27th Cross Road, 7th Block
                  Jayanagar, Bengaluru.
                </p>
              </div>
            </div>

            <div className="ps-contact-item">
              <FiPhone />
              <div>
                <p>+91 7022292417</p>
              </div>
            </div>

            <div className="ps-contact-item">
              <FiMail />
              <div>
                <p>info@psgindia.co.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-contact-form-box" data-aos="fade-left">
          <div className="form-head">
            <h3>Send an Enquiry</h3>
            <p>Our team will get back to you shortly.</p>
          </div>

          <form className="ps-contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="interest"
              placeholder="Business / Service Interest"
              value={formData.interest}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit Enquiry"}
              {!loading && <FiArrowUpRight />}
            </button>

            {status && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "green",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
