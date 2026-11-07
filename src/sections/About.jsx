import SectionHead from '../components/SectionHead';
import profileImage from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="section-block content-section">

      <SectionHead
        number="01"
        title="About me"
        subtitle="A little about who I am and what I do."
      />

      <div className="about-grid">

        <div>
          <p className="large-copy">
            I'm a Computer Science undergraduate and{' '}
            <span className="blue">MERN Stack Developer</span> who enjoys
            turning ideas into useful digital experiences.
          </p>

          <p className="body-copy">
            My work focuses on building full-stack web applications,
            designing RESTful APIs, and integrating practical features
            that improve the user experience. I enjoy learning new
            technologies, solving development challenges, and writing
            clean, maintainable code.
          </p>

          <p className="body-copy">
            I am currently pursuing my B.Tech in Computer Science and
            Engineering at Shri Ram Group of Institutes, Jabalpur.
          </p>
        </div>

        <div className="about-card">

          {/* Profile Photo */}
          <div className="monogram">
            <img src={profileImage} alt="Ankit Sahu" />
          </div>

          <div>
            <span className="card-label">CURRENT FOCUS</span>
            <h3>Full-Stack Development</h3>
            <p>React · Node.js · Express · MongoDB</p>
          </div>

          <div className="about-card-line" />

          <div>
            <span className="card-label">BASED IN</span>
            <p className="location-text">
              Jabalpur, Madhya Pradesh, India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}