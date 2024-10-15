
function AboutMe({profileImg}) {

  const aboutMeText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

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