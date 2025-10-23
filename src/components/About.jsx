import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="section-subtitle">My journey in technology and innovation</p>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm Akash Mishra. I combine creativity and machine intelligence to solve real-world challenges. 
            As a Computer Science Engineering student at Bangalore Institute of Technology, I'm passionate about 
            building intelligent systems and web applications that make a difference.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 50 50" className="stat-doodle">
                  <rect x="12" y="18" width="26" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12,22 L38,22" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="25" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20,12 L30,12" stroke="currentColor" strokeWidth="2"/>
                  <rect x="18" y="27" width="14" height="2" fill="currentColor"/>
                  <rect x="18" y="32" width="10" height="2" fill="currentColor"/>
                </svg>
              </div>
              <p>Bangalore Institute of Technology</p>
              <span className="stat-detail">CGPA: 8.25</span>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 50 50" className="stat-doodle">
                  <circle cx="25" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M25,28 L25,38" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18,35 L25,38 L32,35" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="25" cy="20" r="3" fill="currentColor"/>
                </svg>
              </div>
              <p>Bengaluru, India</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 50 50" className="stat-doodle">
                  <rect x="10" y="18" width="30" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10,20 L25,30 L40,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="15" cy="23" r="1.5" fill="currentColor"/>
                  <circle cx="35" cy="23" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <p>akashmishra1421@gmail.com</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 50 50" className="stat-doodle">
                  <rect x="15" y="12" width="20" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="18" y="16" width="14" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="25" cy="36" r="1.5" fill="currentColor"/>
                  <path d="M20,19 L30,19 M20,22 L30,22 M20,25 L28,25" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <p>+91 9026131405</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="window-title">about-me.js</span>
            </div>
            <div className="window-content">
              <pre><code>{`const akash = {
  name: "Akash Mishra",
  role: "CS Engineering Student",
  college: "BIT Bengaluru",
  cgpa: 8.25,
  interests: [
    "AI & Machine Learning",
    "Web Development",
    "Data Analytics",
    "Problem Solving"
  ],
  skills: ["Python", "React.js", "SQL"],
  currentFocus: "Building AI Systems"
};`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
