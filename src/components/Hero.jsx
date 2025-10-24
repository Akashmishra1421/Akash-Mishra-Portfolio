import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const roles = ['Aspiring AI Developer', 'Web Developer', 'Tech Enthusiast', 'Problem Solver']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Akash Mishra</h1>
          <div className="hero-role">
            <span className="role-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            I'm a Computer Science student passionate about building intelligent systems 
            and web applications that blend creativity with technology.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1453fXeS1R5TovYIw8PJAPmh5gca18XqN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download Resume</a>
          </div>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/akash-mishra-am" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/Akashmishra1421" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:akashmishra1421@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="tech-workspace">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="workspace-svg">
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#D946EF', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#C026D3', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#14B8A6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#2DD4BF', stopOpacity: 1}} />
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect width="500" height="500" fill="transparent"/>
                <circle cx="250" cy="250" r="200" fill="url(#primaryGrad)" opacity="0.05" className="bg-circle"/>

                {/* Main Monitor/Screen */}
                <g className="monitor">
                  <rect x="120" y="150" width="260" height="180" rx="8" fill="url(#primaryGrad)" opacity="0.9"/>
                  <rect x="130" y="160" width="240" height="150" rx="4" fill="#1C1917"/>
                  
                  {/* Code Editor Interface */}
                  <g className="code-editor">
                    {/* Window controls */}
                    <circle cx="140" cy="170" r="4" fill="#FF5F56"/>
                    <circle cx="152" cy="170" r="4" fill="#FFBD2E"/>
                    <circle cx="164" cy="170" r="4" fill="#27C93F"/>
                    
                    {/* Code lines */}
                    <line x1="140" y1="190" x2="200" y2="190" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="200" x2="280" y2="200" stroke="#14B8A6" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="210" x2="240" y2="210" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="220" x2="300" y2="220" stroke="#14B8A6" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="230" x2="220" y2="230" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="240" x2="270" y2="240" stroke="#14B8A6" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="250" x2="250" y2="250" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="260" x2="290" y2="260" stroke="#14B8A6" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="270" x2="230" y2="270" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="280" x2="260" y2="280" stroke="#14B8A6" strokeWidth="2" className="code-line"/>
                    <line x1="140" y1="290" x2="210" y2="290" stroke="#D946EF" strokeWidth="2" className="code-line"/>
                  </g>
                  
                  {/* Monitor stand */}
                  <rect x="230" y="330" width="40" height="30" fill="url(#primaryGrad)" opacity="0.8"/>
                  <rect x="210" y="360" width="80" height="8" rx="4" fill="url(#primaryGrad)" opacity="0.8"/>
                </g>

                {/* Coffee Cup */}
                <g className="coffee" transform="translate(100, 340)">
                  <ellipse cx="0" cy="0" rx="20" ry="6" fill="url(#accentGrad)" opacity="0.8"/>
                  <path d="M-20,0 L-18,-25 L18,-25 L20,0" fill="url(#accentGrad)" opacity="0.9"/>
                  <path d="M20,-15 Q30,-15 30,-8 Q30,-1 20,-1" stroke="url(#accentGrad)" strokeWidth="3" fill="none"/>
                  <path d="M-10,-20 Q-5,-18 0,-20" stroke="#14B8A6" strokeWidth="1.5" fill="none" className="steam"/>
                  <path d="M0,-20 Q5,-18 10,-20" stroke="#14B8A6" strokeWidth="1.5" fill="none" className="steam"/>
                </g>

                {/* Floating Tech Icons */}
                <g className="tech-icons">
                  {/* AI Brain */}
                  <g className="icon ai-icon" transform="translate(80, 100)">
                    <circle r="30" fill="url(#accentGrad)" opacity="0.2"/>
                    <path d="M-15,-5 Q-10,-15 0,-15 Q10,-15 15,-5 M-15,5 Q-10,15 0,15 Q10,15 15,5" 
                          stroke="#14B8A6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="-8" cy="-5" r="3" fill="#14B8A6"/>
                    <circle cx="8" cy="-5" r="3" fill="#14B8A6"/>
                    <circle cx="0" cy="5" r="3" fill="#14B8A6"/>
                    <line x1="-8" y1="-5" x2="0" y2="5" stroke="#14B8A6" strokeWidth="2"/>
                    <line x1="8" y1="-5" x2="0" y2="5" stroke="#14B8A6" strokeWidth="2"/>
                  </g>

                  {/* Cloud Computing */}
                  <g className="icon cloud-icon" transform="translate(420, 120)">
                    <circle r="30" fill="url(#accentGrad)" opacity="0.2"/>
                    <path d="M-15,5 Q-20,-5 -10,-10 Q-5,-15 5,-10 Q15,-10 20,-5 Q25,0 15,5 Z" 
                          fill="#14B8A6" opacity="0.9"/>
                    <text x="-8" y="8" fill="white" fontSize="12" fontWeight="bold">☁</text>
                  </g>

                  {/* Database */}
                  <g className="icon db-icon" transform="translate(420, 380)">
                    <circle r="30" fill="url(#primaryGrad)" opacity="0.2"/>
                    <ellipse cy="-10" rx="18" ry="6" fill="none" stroke="#D946EF" strokeWidth="3"/>
                    <ellipse cy="0" rx="18" ry="6" fill="none" stroke="#D946EF" strokeWidth="3"/>
                    <ellipse cy="10" rx="18" ry="6" fill="none" stroke="#D946EF" strokeWidth="3"/>
                    <line x1="-18" y1="-10" x2="-18" y2="10" stroke="#D946EF" strokeWidth="3"/>
                    <line x1="18" y1="-10" x2="18" y2="10" stroke="#D946EF" strokeWidth="3"/>
                  </g>

                  {/* Code Brackets */}
                  <g className="icon code-icon" transform="translate(80, 380)">
                    <circle r="30" fill="url(#primaryGrad)" opacity="0.2"/>
                    <path d="M-10,-15 L-18,0 L-10,15" stroke="#D946EF" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    <path d="M10,-15 L18,0 L10,15" stroke="#D946EF" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    <line x1="-5" y1="-10" x2="5" y2="10" stroke="#D946EF" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  {/* Gear/Settings */}
                  <g className="icon gear-icon" transform="translate(250, 80)">
                    <circle r="25" fill="url(#accentGrad)" opacity="0.2"/>
                    <circle r="15" fill="none" stroke="#14B8A6" strokeWidth="3"/>
                    <circle r="7" fill="#14B8A6"/>
                    <line x1="0" y1="-20" x2="0" y2="-15" stroke="#14B8A6" strokeWidth="3"/>
                    <line x1="0" y1="15" x2="0" y2="20" stroke="#14B8A6" strokeWidth="3"/>
                    <line x1="-20" y1="0" x2="-15" y2="0" stroke="#14B8A6" strokeWidth="3"/>
                    <line x1="15" y1="0" x2="20" y2="0" stroke="#14B8A6" strokeWidth="3"/>
                  </g>

                  {/* Terminal */}
                  <g className="icon terminal-icon" transform="translate(250, 420)">
                    <circle r="25" fill="url(#primaryGrad)" opacity="0.2"/>
                    <rect x="-15" y="-12" width="30" height="24" rx="2" fill="none" stroke="#D946EF" strokeWidth="2.5"/>
                    <path d="M-10,-5 L-5,0 L-10,5" stroke="#D946EF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <line x1="0" y1="5" x2="10" y2="5" stroke="#D946EF" strokeWidth="2.5" strokeLinecap="round"/>
                  </g>
                </g>

                {/* Connection Lines */}
                <g className="connections" opacity="0.3">
                  <line x1="110" y1="130" x2="200" y2="200" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="5,5" className="connect-line"/>
                  <line x1="390" y1="150" x2="320" y2="200" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="5,5" className="connect-line"/>
                  <line x1="110" y1="350" x2="200" y2="300" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,5" className="connect-line"/>
                  <line x1="390" y1="350" x2="320" y2="300" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,5" className="connect-line"/>
                </g>

                {/* Floating Particles */}
                <g className="particles">
                  <circle cx="150" cy="200" r="3" fill="#D946EF" className="particle p1"/>
                  <circle cx="350" cy="220" r="3" fill="#14B8A6" className="particle p2"/>
                  <circle cx="180" cy="350" r="2" fill="#D946EF" className="particle p3"/>
                  <circle cx="320" cy="370" r="2" fill="#14B8A6" className="particle p4"/>
                  <circle cx="250" cy="150" r="2" fill="#D946EF" className="particle p5"/>
                  <circle cx="250" cy="450" r="2" fill="#14B8A6" className="particle p6"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
