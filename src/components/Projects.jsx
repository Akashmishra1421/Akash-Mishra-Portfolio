import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Automatic Music Generation System',
      description: 'Built an AI model using LSTM neural networks to generate melodies from MIDI data. The system learns musical patterns and creates original compositions.',
      tech: ['Python', 'TensorFlow', 'LSTM', 'MIDI'],
      github: 'https://github.com/Akashmishra1421/Automatic-Music-Genration-Tool-using-LSTM',
      live: null,
      doodle: (
        <svg viewBox="0 0 100 100" className="project-doodle">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#007bff" strokeWidth="2"/>
          <path d="M30,50 L35,45 L40,55 L45,40 L50,60 L55,35 L60,55 L65,45 L70,50" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="50" cy="50" r="5" fill="#007bff"/>
        </svg>
      )
    },
    {
      title: 'MERN Chat Application',
      description: 'Full-stack real-time chat application enabling live messaging between users with user authentication and Socket.IO integration.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
      github: 'https://github.com/Akashmishra1421/MERN-Chat-App',
      live: null,
      doodle: (
        <svg viewBox="0 0 100 100" className="project-doodle">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="#007bff" strokeWidth="2"/>
          <path d="M25,40 L45,40 M25,50 L55,50 M25,60 L40,60" stroke="#007bff" strokeWidth="2"/>
          <circle cx="70" cy="45" r="8" fill="#007bff" opacity="0.3"/>
          <circle cx="75" cy="55" r="6" fill="#007bff" opacity="0.5"/>
        </svg>
      )
    },
    {
      title: 'Space Exploration DBMS',
      description: 'Web application for managing and visualizing space mission data with MySQL backend. Features include mission tracking and data analytics.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      github: 'https://github.com/Akashmishra1421/SEDMS',
      live: null,
      doodle: (
        <svg viewBox="0 0 100 100" className="project-doodle">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#007bff" strokeWidth="2"/>
          <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#007bff" strokeWidth="1.5"/>
          <ellipse cx="50" cy="50" rx="10" ry="30" fill="none" stroke="#007bff" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="3" fill="#007bff"/>
          <circle cx="75" cy="25" r="2" fill="#007bff"/>
          <circle cx="25" cy="75" r="2" fill="#007bff"/>
        </svg>
      )
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Things I've Built</h2>
      <p className="section-subtitle">Here's what I've been creating lately</p>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-icon">{project.doodle}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIdx) => (
                <span key={techIdx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
