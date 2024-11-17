import "./Css/footer.css";
export default function Footer(){
return(
    <footer className="footer">
    <div className="footer-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input-field"
          required
        />
        <textarea
          placeholder="Your Message"
          className="input-field"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  </footer>
)
}