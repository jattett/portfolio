import Styled from './Styled';

function Contact() {
  return (
    <Styled>
      <div className="contact-wrapper">
        <h1>Contact Information</h1>
        <p className="contact-detail">
          <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p className="contact-detail">
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            github.com/your-github
          </a>
        </p>
        <p className="contact-detail">
          <strong>Phone:</strong> <span>(+82) 010-1234-5678</span>
        </p>
        <p className="contact-detail">
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/your-profile
          </a>
        </p>
      </div>
    </Styled>
  );
}

export default Contact;
