import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 60 },
        { name: 'C', level: 60 },
        { name: 'Python', level: 55 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 75 },
        { name: 'JavaScript', level: 65 },
        { name: 'React.js', level: 60 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'SQL', level: 70 },
        { name: 'MongoDB', level: 55 },
        { name: 'MySQL', level: 65 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 50 },
        { name: 'GCP', level: 50 },
        { name: 'Azure DevOps', level: 45 },
        { name: 'Jenkins', level: 45 },
        { name: 'Ansible', level: 40 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'VS Code', level: 75 },
        { name: 'Git', level: 65 },
        { name: 'IntelliJ IDEA', level: 60 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 70 },
        { name: 'Marketing', level: 65 },
        { name: 'Teamwork', level: 75 },
        { name: 'Management', level: 65 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>What I Work With</h2>
      <p className="section-subtitle">Tools and technologies I use to bring ideas to life</p>
      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
