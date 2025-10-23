import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      role: 'Marketing Head',
      company: 'BIT Placement Club',
      period: 'Jul 2024 - Jul 2025',
      description: [
        'Led campus outreach campaigns to boost event participation and visibility',
        'Developed marketing strategies for placement-related events',
        'Coordinated with team members to execute successful campaigns'
      ]
    },
    {
      role: 'Social Media Managing Head',
      company: 'BIT Wellbeing Center - Vikasana',
      period: 'Jun 2024 - Jul 2025',
      description: [
        'Designed and managed digital campaigns for mental health awareness',
        'Created the club\'s official logo and branding materials',
        'Increased social media engagement through strategic content planning'
      ]
    },
    {
      role: 'Student Placement Coordinator',
      company: 'Training & Placement Cell, BIT',
      period: 'Dec 2023 - Present',
      description: [
        'Coordinated interviews and maintained placement records',
        'Assisted in recruitment processes for various companies',
        'Facilitated communication between students and recruiters'
      ]
    }
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Bangalore Institute of Technology',
      period: '2021 - 2025',
      description: 'CGPA: 8.25/10'
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>My Journey </h2>
      <p className="section-subtitle">Where I've been and what I've learned</p>
      <div className="experience-container">
        <div className="timeline-section">
          <h3 className="section-title">💼 Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.role}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <ul>
                    {exp.description.map((desc, descIdx) => (
                      <li key={descIdx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="section-title">🎓 Education</h3>
          <div className="timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="company">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
