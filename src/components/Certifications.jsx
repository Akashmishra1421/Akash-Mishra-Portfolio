import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'Strategy and Leadership for Career Development',
      issuer: 'IISc Bengaluru',
      date: 'Jan 2023',
      doodle: (
        <svg viewBox="0 0 100 100" className="cert-doodle">
          <rect x="20" y="25" width="60" height="50" rx="3" fill="none" stroke="#007bff" strokeWidth="2"/>
          <path d="M30,40 L70,40 M30,50 L70,50 M30,60 L55,60" stroke="#007bff" strokeWidth="1.5"/>
          <circle cx="50" cy="20" r="8" fill="#007bff" opacity="0.3"/>
        </svg>
      ),
      link: 'https://drive.google.com/file/d/1vkC8m4_er4e1mB18ISl77JHtv54pd00T/view?usp=drive_link'
    },
    {
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google Cloud',
      date: 'Jun 2025',
      doodle: (
        <svg viewBox="0 0 100 100" className="cert-doodle">
          <path d="M30,60 Q30,40 50,40 Q70,40 70,60" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="35" cy="55" r="3" fill="#007bff"/>
          <circle cx="50" cy="50" r="3" fill="#007bff"/>
          <circle cx="65" cy="55" r="3" fill="#007bff"/>
          <path d="M40,35 L45,30 L50,35 L55,30 L60,35" fill="none" stroke="#007bff" strokeWidth="1.5"/>
        </svg>
      ),
      link: 'https://www.credly.com/badges/df2dd0a6-a98e-422b-a580-d597426f7903/public_url'
    },
    {
      title: 'Google Cloud Cybersecurity Certificate',
      issuer: 'Google Cloud',
      date: '2025',
      doodle: (
        <svg viewBox="0 0 100 100" className="cert-doodle">
          <path d="M50,25 L35,35 L35,55 Q35,70 50,75 Q65,70 65,55 L65,35 Z" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="50" cy="50" r="8" fill="none" stroke="#007bff" strokeWidth="2"/>
          <rect x="48" y="50" width="4" height="10" fill="#007bff"/>
        </svg>
      ),
      link: 'https://www.credly.com/badges/de76141b-d46c-492f-bf6b-e916f3aec674/public_url'
    },
    {
      title: 'Juniper Network Associate - Cloud',
      issuer: 'Juniper Networks',
      date: 'Aug 2025 - Aug 2028',
      doodle: (
        <svg viewBox="0 0 100 100" className="cert-doodle">
          <circle cx="30" cy="50" r="8" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="50" cy="30" r="8" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="70" cy="50" r="8" fill="none" stroke="#007bff" strokeWidth="2"/>
          <circle cx="50" cy="70" r="8" fill="none" stroke="#007bff" strokeWidth="2"/>
          <line x1="35" y1="48" x2="45" y2="35" stroke="#007bff" strokeWidth="1.5"/>
          <line x1="55" y1="35" x2="65" y2="48" stroke="#007bff" strokeWidth="1.5"/>
          <line x1="65" y1="52" x2="55" y2="65" stroke="#007bff" strokeWidth="1.5"/>
          <line x1="45" y1="65" x2="35" y2="52" stroke="#007bff" strokeWidth="1.5"/>
        </svg>
      ),
      link: 'https://www.credly.com/badges/7b35015b-4d22-4113-beb6-677f99316248/public_url'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Learning </h2>
      <p className="section-subtitle">Continuous learning and professional development</p>
      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <a 
            key={idx} 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-card"
          >
            <div className="cert-icon">{cert.doodle}</div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            <div className="cert-view">
              View Certificate →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
