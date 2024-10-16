
function AboutMe({profileImg}) {

  const aboutMeText = 'I am currently undergoing a career change and seeking an apprenticeship in web development. Passionate about learning new skills, I am constantly looking for new challenges to improve my technical knowledge. What I enjoy the most is creating solutions that bring real added value and meet concrete needs. My goal is to contribute to innovative projects while developing solid skills in the field of web development.'

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