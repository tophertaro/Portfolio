
function AboutMe({profileImg, aboutMeText}) {
  return(
    <div className="aboutme-container">
      <div className="profile-picture">
        <img src={profileImg} alt="profile picture" />
      </div>
      <div className="aboutme-content">
        <h2>About Me</h2>
        <p>{aboutMeText}</p>
      </div>
    </div>
  )
}

export default AboutMe