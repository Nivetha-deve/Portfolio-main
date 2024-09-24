
const Contact = () => {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <p>
          Feel free to reach out to me through any of the following methods:
        </p>
        <div className="contact-details">
          <ul>
            <li className="contact-item">
              <strong>Email:</strong>{" "}
              <a href="mailto: nivethashree015@gmail.com">
                nivethashree015@gmail.com{" "}
              </a>
            </li>
            <li className="contact-item">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Nivetha-deve"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nivetha-deve
              </a>
            </li>
            <li className="contact-item">
              <strong>Phone:</strong> +91-63804-67388
            </li>
            <li className="contact-item">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/nivetha-shree-499b49291/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nivetha Shree
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact;