import jsLogo from '../assets/js-logo.svg'
import reactLogo from '../assets/react-logo.svg'
import nodeJsLogo from '../assets/nodejs-logo.svg'
import tailwindLogo from '../assets/tailwind-logo.svg'

function Skills() {

  const skills = [
    {name: 'Javascript', logo: jsLogo},
    {name: 'React', logo: reactLogo},
    {name: 'Node JS', logo: nodeJsLogo},
    {name: 'Tailwind', logo: tailwindLogo}
  ]

  return(
    <div className='skills-section'>
      <h2>Skills</h2>
      <div className='skills-grid'>
        {skills.map((skills,index) => (
          <div key={index} className='skills-card'>
            <img src={skills.logo} alt={skills.name} className='skills-logo'/>  
            <p>{skills.name}</p>    
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills