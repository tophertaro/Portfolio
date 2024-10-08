
function AboutMe({profileImg, aboutMeText}) {
  return(
    <div className="aboutme-card">
      <div className="profile">
        <img src={profileImg} alt="profile picture" />
        <h3 className="profile-title">Frontend<br/>Web Developer</h3>
      </div>
      <div className="aboutme-content">
        <h2>About Me</h2>
        <p>{aboutMeText}</p>
      </div>
    </div>
  )
}

export default AboutMe