

function Header() {

  const navLinks = [
    {label: 'Projects'},
    {label: 'Contact'}
  ]
  
  return(
    <header>
      <div className="header">
        <div className="logo">
          <h1>Phorimavong Christopher</h1>
        </div>
        
        <div>
          <nav className="navlink">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={`#${link.label.toLowerCase()}`}>{link.label}</a>
              </li>
            ))}
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;

