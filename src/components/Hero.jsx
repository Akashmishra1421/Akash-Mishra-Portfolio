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
                  <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#D946EF', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#14B8A6', stopOpacity: 0.1}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.4"/>
                  </filter>
                </defs>

                {/* Background Elements */}
                <rect width="500" height="500" fill="transparent"/>
                
                {/* Animated Background Circles */}
                <circle cx="250" cy="250" r="200" fill="url(#primaryGrad)" opacity="0.08" className="bg-circle"/>
                <circle cx="250" cy="250" r="150" fill="url(#accentGrad)" opacity="0.05" className="bg-circle-2"/>
                
                {/* Grid Pattern */}
                <g opacity="0.1" className="grid-pattern">
                  <line x1="0" y1="125" x2="500" y2="125" stroke="#D946EF" strokeWidth="1"/>
                  <line x1="0" y1="250" x2="500" y2="250" stroke="#14B8A6" strokeWidth="1"/>
                  <line x1="0" y1="375" x2="500" y2="375" stroke="#D946EF" strokeWidth="1"/>
                  <line x1="125" y1="0" x2="125" y2="500" stroke="#14B8A6" strokeWidth="1"/>
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#D946EF" strokeWidth="1"/>
                  <line x1="375" y1="0" x2="375" y2="500" stroke="#14B8A6" strokeWidth="1"/>
                </g>

                {/* Desk Surface */}
                <rect x="40" y="350" width="420" height="10" rx="5" fill="url(#primaryGrad)" opacity="0.15"/>

                {/* Main Monitor Setup */}
                <g className="monitor" filter="url(#shadow)">
                  {/* Monitor Frame */}
                  <rect x="120" y="140" width="260" height="180" rx="10" fill="url(#primaryGrad)" opacity="0.95"/>
                  <rect x="128" y="148" width="244" height="160" rx="6" fill="#0A0A0A"/>
                  
                  {/* Screen Glow Effect */}
                  <rect x="128" y="148" width="244" height="160" rx="6" fill="url(#screenGlow)" opacity="0.6"/>
                  
                  {/* VS Code Interface */}
                  <g className="code-editor">
                    {/* Title Bar */}
                    <rect x="128" y="148" width="244" height="22" rx="6" fill="#1E1E1E"/>
                    
                    {/* Window Controls */}
                    <circle cx="140" cy="159" r="4" fill="#FF5F57" className="window-btn"/>
                    <circle cx="152" cy="159" r="4" fill="#FEBC2E" className="window-btn"/>
                    <circle cx="164" cy="159" r="4" fill="#28C840" className="window-btn"/>
                    
                    {/* File Tab */}
                    <rect x="185" y="153" width="70" height="13" rx="2" fill="#2D2D30"/>
                    <text x="193" y="162" fill="#CCCCCC" fontSize="9" fontFamily="monospace">index.jsx</text>
                    
                    {/* Sidebar */}
                    <rect x="128" y="170" width="35" height="138" fill="#252526"/>
                    
                    {/* Sidebar Icons */}
                    <rect x="136" y="178" width="18" height="18" rx="2" fill="#D946EF" opacity="0.3"/>
                    <rect x="136" y="204" width="18" height="18" rx="2" fill="#14B8A6" opacity="0.2"/>
                    <rect x="136" y="230" width="18" height="18" rx="2" fill="#D946EF" opacity="0.2"/>
                    
                    {/* Code Area */}
                    <g className="code-lines">
                      {/* Line numbers */}
                      <text x="170" y="186" fill="#858585" fontSize="10" fontFamily="monospace">1</text>
                      <text x="170" y="198" fill="#858585" fontSize="10" fontFamily="monospace">2</text>
                      <text x="170" y="210" fill="#858585" fontSize="10" fontFamily="monospace">3</text>
                      <text x="170" y="222" fill="#858585" fontSize="10" fontFamily="monospace">4</text>
                      <text x="170" y="234" fill="#858585" fontSize="10" fontFamily="monospace">5</text>
                      <text x="170" y="246" fill="#858585" fontSize="10" fontFamily="monospace">6</text>
                      <text x="170" y="258" fill="#858585" fontSize="10" fontFamily="monospace">7</text>
                      <text x="170" y="270" fill="#858585" fontSize="10" fontFamily="monospace">8</text>
                      <text x="170" y="282" fill="#858585" fontSize="10" fontFamily="monospace">9</text>
                      
                      {/* Code syntax */}
                      <line x1="182" y1="182" x2="230" y2="182" stroke="#D946EF" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="182" y1="194" x2="290" y2="194" stroke="#14B8A6" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="194" y1="206" x2="260" y2="206" stroke="#D946EF" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="194" y1="218" x2="310" y2="218" stroke="#14B8A6" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="194" y1="230" x2="245" y2="230" stroke="#D946EF" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="182" y1="242" x2="280" y2="242" stroke="#14B8A6" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="194" y1="254" x2="295" y2="254" stroke="#D946EF" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="194" y1="266" x2="255" y2="266" stroke="#14B8A6" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      <line x1="182" y1="278" x2="240" y2="278" stroke="#D946EF" strokeWidth="2" className="code-line" strokeLinecap="round"/>
                      
                      {/* Cursor */}
                      <rect x="240" y="274" width="2" height="10" fill="#FFFFFF" className="cursor-blink"/>
                    </g>
                  </g>
                  
                  {/* Monitor Stand */}
                  <rect x="230" y="320" width="40" height="30" fill="url(#primaryGrad)" opacity="0.85"/>
                  <rect x="210" y="350" width="80" height="8" rx="4" fill="url(#primaryGrad)" opacity="0.85"/>
                </g>

                {/* Laptop (Left Side) */}
                <g className="laptop" transform="translate(50, 280)">
                  <rect x="0" y="0" width="100" height="65" rx="5" fill="url(#accentGrad)" opacity="0.9" filter="url(#shadow)"/>
                  <rect x="4" y="4" width="92" height="53" rx="3" fill="#0A0A0A"/>
                  
                  {/* Laptop Screen Content */}
                  <line x1="12" y1="16" x2="50" y2="16" stroke="#14B8A6" strokeWidth="1.5" className="code-line"/>
                  <line x1="12" y1="24" x2="68" y2="24" stroke="#D946EF" strokeWidth="1.5" className="code-line"/>
                  <line x1="12" y1="32" x2="58" y2="32" stroke="#14B8A6" strokeWidth="1.5" className="code-line"/>
                  <line x1="12" y1="40" x2="75" y2="40" stroke="#D946EF" strokeWidth="1.5" className="code-line"/>
                  <line x1="12" y1="48" x2="54" y2="48" stroke="#14B8A6" strokeWidth="1.5" className="code-line"/>
                  
                  {/* Laptop Base */}
                  <path d="M-8,65 L108,65 L100,73 L0,73 Z" fill="url(#accentGrad)" opacity="0.8"/>
                </g>

                {/* Coffee Mug (Enhanced) */}
                <g className="coffee" transform="translate(400, 305)" filter="url(#shadow)">
                  <ellipse cx="0" cy="0" rx="20" ry="6" fill="url(#accentGrad)" opacity="0.9"/>
                  <path d="M-20,0 L-18,-28 L18,-28 L20,0" fill="url(#accentGrad)" opacity="0.95"/>
                  <ellipse cx="0" cy="-28" rx="18" ry="5" fill="#14B8A6" opacity="0.6"/>
                  
                  {/* Handle */}
                  <path d="M20,-16 Q30,-16 30,-8 Q30,0 20,0" stroke="url(#accentGrad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  
                  {/* Steam */}
                  <path d="M-10,-26 Q-6,-32 -8,-38" stroke="#14B8A6" strokeWidth="1.5" fill="none" className="steam" strokeLinecap="round"/>
                  <path d="M0,-26 Q4,-32 2,-38" stroke="#14B8A6" strokeWidth="1.5" fill="none" className="steam" strokeLinecap="round"/>
                  <path d="M10,-26 Q14,-32 12,-38" stroke="#14B8A6" strokeWidth="1.5" fill="none" className="steam" strokeLinecap="round"/>
                </g>

                {/* Notebook/Notepad */}
                <g className="notebook" transform="translate(350, 320)">
                  <rect x="0" y="0" width="60" height="40" rx="3" fill="#D946EF" opacity="0.2" stroke="#D946EF" strokeWidth="2"/>
                  <line x1="8" y1="12" x2="50" y2="12" stroke="#D946EF" strokeWidth="1.2" opacity="0.6"/>
                  <line x1="8" y1="20" x2="46" y2="20" stroke="#D946EF" strokeWidth="1.2" opacity="0.6"/>
                  <line x1="8" y1="28" x2="50" y2="28" stroke="#D946EF" strokeWidth="1.2" opacity="0.6"/>
                  
                  {/* Pen */}
                  <line x1="55" y1="8" x2="68" y2="-5" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="68" cy="-5" r="1.5" fill="#14B8A6"/>
                </g>


                {/* Floating Tech Icons (Enhanced & Better Positioned) */}
                <g className="tech-icons">
                  {/* React Logo - Top Left */}
                  <g className="icon react-icon" transform="translate(80, 100)">
                    <circle r="28" fill="url(#accentGrad)" opacity="0.15" className="icon-bg"/>
                    <ellipse rx="20" ry="8" fill="none" stroke="#14B8A6" strokeWidth="2.5"/>
                    <ellipse rx="20" ry="8" fill="none" stroke="#14B8A6" strokeWidth="2.5" transform="rotate(60)"/>
                    <ellipse rx="20" ry="8" fill="none" stroke="#14B8A6" strokeWidth="2.5" transform="rotate(120)"/>
                    <circle r="4" fill="#14B8A6"/>
                  </g>

                  {/* AI/ML Brain - Top Right */}
                  <g className="icon ai-icon" transform="translate(420, 100)">
                    <circle r="28" fill="url(#primaryGrad)" opacity="0.15" className="icon-bg"/>
                    <path d="M-15,-6 Q-10,-16 0,-16 Q10,-16 15,-6 M-15,6 Q-10,16 0,16 Q10,16 15,6" 
                          stroke="#D946EF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="-8" cy="-6" r="3" fill="#D946EF" className="pulse"/>
                    <circle cx="8" cy="-6" r="3" fill="#D946EF" className="pulse"/>
                    <circle cx="0" cy="6" r="3" fill="#D946EF" className="pulse"/>
                    <line x1="-8" y1="-6" x2="0" y2="6" stroke="#D946EF" strokeWidth="2"/>
                    <line x1="8" y1="-6" x2="0" y2="6" stroke="#D946EF" strokeWidth="2"/>
                    <line x1="-8" y1="-6" x2="8" y2="-6" stroke="#D946EF" strokeWidth="2"/>
                  </g>

                  {/* Database - Bottom Right */}
                  <g className="icon db-icon" transform="translate(420, 400)">
                    <circle r="28" fill="url(#primaryGrad)" opacity="0.15" className="icon-bg"/>
                    <ellipse cy="-10" rx="16" ry="6" fill="#D946EF" opacity="0.3"/>
                    <ellipse cy="-10" rx="16" ry="6" fill="none" stroke="#D946EF" strokeWidth="2.5"/>
                    <ellipse cy="0" rx="16" ry="6" fill="none" stroke="#D946EF" strokeWidth="2.5"/>
                    <ellipse cy="10" rx="16" ry="6" fill="none" stroke="#D946EF" strokeWidth="2.5"/>
                    <line x1="-16" y1="-10" x2="-16" y2="10" stroke="#D946EF" strokeWidth="2.5"/>
                    <line x1="16" y1="-10" x2="16" y2="10" stroke="#D946EF" strokeWidth="2.5"/>
                  </g>

                  {/* Code Brackets - Bottom Left */}
                  <g className="icon code-icon" transform="translate(80, 400)">
                    <circle r="28" fill="url(#accentGrad)" opacity="0.15" className="icon-bg"/>
                    <path d="M-10,-15 L-18,0 L-10,15" stroke="#14B8A6" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10,-15 L18,0 L10,15" stroke="#14B8A6" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="-5" y1="-10" x2="5" y2="10" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  {/* API/Network - Top Center */}
                  <g className="icon api-icon" transform="translate(250, 80)">
                    <circle r="25" fill="url(#accentGrad)" opacity="0.15" className="icon-bg"/>
                    <circle r="5" fill="#14B8A6"/>
                    <circle cx="-12" cy="-12" r="4" fill="#14B8A6" opacity="0.8"/>
                    <circle cx="12" cy="-12" r="4" fill="#14B8A6" opacity="0.8"/>
                    <circle cx="-12" cy="12" r="4" fill="#14B8A6" opacity="0.8"/>
                    <circle cx="12" cy="12" r="4" fill="#14B8A6" opacity="0.8"/>
                    <line x1="0" y1="0" x2="-12" y2="-12" stroke="#14B8A6" strokeWidth="2"/>
                    <line x1="0" y1="0" x2="12" y2="-12" stroke="#14B8A6" strokeWidth="2"/>
                    <line x1="0" y1="0" x2="-12" y2="12" stroke="#14B8A6" strokeWidth="2"/>
                    <line x1="0" y1="0" x2="12" y2="12" stroke="#14B8A6" strokeWidth="2"/>
                  </g>

                  {/* Terminal - Bottom Center */}
                  <g className="icon terminal-icon" transform="translate(250, 420)">
                    <circle r="25" fill="url(#primaryGrad)" opacity="0.15" className="icon-bg"/>
                    <rect x="-15" y="-12" width="30" height="24" rx="2" fill="none" stroke="#D946EF" strokeWidth="2.5"/>
                    <path d="M-10,-5 L-5,0 L-10,5" stroke="#D946EF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="0" y1="5" x2="10" y2="5" stroke="#D946EF" strokeWidth="2.5" strokeLinecap="round"/>
                  </g>
                </g>

                {/* Connection Lines (Enhanced) */}
                <g className="connections" opacity="0.3">
                  <path d="M108 128 Q140 150 160 170" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                  <path d="M392 128 Q360 150 340 170" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                  <path d="M108 372 Q140 350 160 330" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                  <path d="M392 372 Q360 350 340 330" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                  <path d="M250 105 Q230 125 210 145" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                  <path d="M250 395 Q270 375 290 355" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,3" fill="none" className="connect-line"/>
                </g>

                {/* Floating Particles (More Dynamic) */}
                <g className="particles">
                  <circle cx="160" cy="200" r="3" fill="#D946EF" className="particle p1" opacity="0.8"/>
                  <circle cx="340" cy="220" r="3" fill="#14B8A6" className="particle p2" opacity="0.8"/>
                  <circle cx="180" cy="320" r="2.5" fill="#D946EF" className="particle p3" opacity="0.6"/>
                  <circle cx="320" cy="340" r="2.5" fill="#14B8A6" className="particle p4" opacity="0.6"/>
                  <circle cx="250" cy="150" r="2.5" fill="#D946EF" className="particle p5" opacity="0.7"/>
                  <circle cx="250" cy="380" r="2.5" fill="#14B8A6" className="particle p6" opacity="0.7"/>
                  <circle cx="130" cy="250" r="2" fill="#D946EF" className="particle p7" opacity="0.5"/>
                  <circle cx="370" cy="270" r="2" fill="#14B8A6" className="particle p8" opacity="0.5"/>
                </g>

                {/* Data Flow Indicators */}
                <g className="data-flow">
                  <circle cx="200" cy="180" r="2.5" fill="#14B8A6" className="flow-dot d1"/>
                  <circle cx="300" cy="190" r="2.5" fill="#D946EF" className="flow-dot d2"/>
                  <circle cx="220" cy="320" r="2.5" fill="#14B8A6" className="flow-dot d3"/>
                  <circle cx="280" cy="310" r="2.5" fill="#D946EF" className="flow-dot d4"/>
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
