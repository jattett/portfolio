import Styled from './Styled';
import { FaEnvelope, FaGithub, FaPhone, FaGlobe } from 'react-icons/fa';

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
              <p>
                <div className="cube-title">
                  <FaGithub /> <strong>GitHub</strong>{' '}
                </div>
                <a href="https://github.com/jattett" target="_blank" rel="noopener noreferrer">
                  https://github.com/jattett
                </a>
              </p>
            </div>
            <div className="cube-face face-back">
              <p>
                <div className="cube-title">
                  <FaEnvelope /> <strong>Email</strong>{' '}
                </div>
                <a href="mailto:your.email@example.com">gnto2000@naver.com</a>
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
                <a href="https://portfolio-4vhc.vercel.app/" target="_blank" rel="noopener noreferrer">
                  https://portfolio-4vhc.vercel.app/
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
