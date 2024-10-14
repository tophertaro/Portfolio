import gitLogo from '../assets/git-logo.svg'
import vsCodeLogo from '../assets/vscode-logo.png'

function Tools() {

  const tools = [
    {name: 'Git', logo: gitLogo},
    {name: 'Vs Code', logo: vsCodeLogo},
  ]

  return(
    <div className='tools-section'>
      <h2>Tools</h2>
      <div className='tools-grid'>
        {tools.map((tool,index) => (
          <div key={index} className='tools-card'>
            <img src={tool.logo} alt={tool.name} className='tools-logo'/>  
            <p>{tool.name}</p>    
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tools