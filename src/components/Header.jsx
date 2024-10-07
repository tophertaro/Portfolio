

function Header({links}) {
  return(
    <header>
      <div className="header">
        <div className="logo">
          <h1>Phorimavong Christopher</h1>
        </div>
        
        <div>
          <nav className="navlink">
          <ul>
            {links.map((link, index) => (
              <li key={index}>{link.label}</li>
            ))}
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;

