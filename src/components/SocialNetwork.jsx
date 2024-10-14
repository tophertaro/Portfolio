import linkedinLogo from '../assets/linkedin-logo.jpg'
import githubLogo from '../assets/github-logo.jpg'


function SocialNetwork() {

  const socialNetworks = [
    {name:'Linkedin',
    logo: linkedinLogo,
    link: 'https://www.linkedin.com/in/christopher-phorimavong-677137188/',
    },
    {name:'Github',
    logo: githubLogo,
    link: 'https://github.com/tophertaro',
    }
  ]
  return(
    <div className="sn-section">
      <h2>Find me on :</h2>
      <div className="sn-cards">
        {socialNetworks.map((network, index) => (
          <div className='cards-content' key={index}> 
            <a href={network.link} target="_blank" rel="noopener noreferrer">
              <img src={network.logo} alt={`logo ${network.name}`} />
              <p>{network.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialNetwork;