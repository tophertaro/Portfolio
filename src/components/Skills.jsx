
function Skills() {

  const skills = [
    {name: 'Javascript', logo: '/assets/js-logo.svg'},
    {name: 'React', logo: '/assets/react-logo.svg'},
    {name: 'Node JS', logo: '/assets/nodejs-logo.svg'},
    {name: 'Tailwind', logo: '/assets/tailwind-logo.svg'}
  ]

  return(
    <div className='skills-section'>
      <h2>Skills</h2>
      <div className='skills-grid'>
        {skills.map((skill,index) => (
          <div key={index} className='skills-card'>
            <img src={skill.logo} alt={skill.name} className='skills-logo'/>  
            <p>{skill.name}</p>    
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills