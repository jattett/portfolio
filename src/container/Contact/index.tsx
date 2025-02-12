import Styled from './Styled';
import { FaEnvelope, FaGithub, FaPhone, FaGlobe, FaBlog } from 'react-icons/fa';

function Contact() {
  return (
    <Styled>
      <>
        <div className="contact-title">
          <h1>Contact</h1>
          <p>
            마우스를 올리시면 <span>회전이</span> 멈춰요
          </p>
        </div>
        <div className="scene">
          <div className="cube">
            <div className="cube-face face-front">
              <h2>Contact Me</h2>
            </div>
            <div className="cube-face face-back">
              <p>
                <div className="cube-title">
                  <FaEnvelope /> <strong>Email</strong>{' '}
                </div>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
              <p>
                <div className="cube-title">
                  <FaGithub /> <strong>GitHub</strong>{' '}
                </div>
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                  github.com/your-github
                </a>
              </p>
            </div>
            <div className="cube-face face-left">
              <p>
                <div className="cube-title">
                  <FaPhone /> <strong>Phone</strong>
                </div>
                <span>(+82) 010-7422-8672</span>
              </p>
            </div>
            <div className="cube-face face-right">
              <p>
                <div className="cube-title">
                  <FaGlobe /> <strong>Website</strong>{' '}
                </div>
                <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer">
                  your-portfolio.com
                </a>
              </p>
              <p>
                <div className="cube-title">
                  <FaBlog /> <strong>Blog:</strong>{' '}
                </div>
                <a href="https://your-blog.com" target="_blank" rel="noopener noreferrer">
                  your-blog.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    </Styled>
  );
}

export default Contact;
