
function AboutMe({profileImg}) {

  const aboutMeText = 'Je suis actuellement en reconversion professionnelle et à la recherche d\'une alternance en développement web. Passionné par l\'apprentissage de nouvelles compétences, je suis constamment à la recherche de nouveaux défis pour améliorer mes connaissances techniques. Ce que j\'aime le plus, c\'est créer des solutions qui apportent une réelle valeur ajoutée et répondre aux besoins concrets. Mon objectif est de contribuer à des projets innovants tout en développant des compétences solides dans le domaine du développement web.'

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