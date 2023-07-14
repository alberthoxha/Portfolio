import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="formcontainer">
        <h1>Projects</h1>
        <div className="contents">
          <div className="product-grid">
            <div className="card stacked featured">
              <div className="card__content">
                <h2 className="title">Usepopcorn</h2>
                <p className="card__desc">
                  This movie application i made during the course from Jonas
                </p>
              </div>
              <h3 className="card__lang">React JS</h3>
            </div>

            <a href="https://expediz.netlify.app/" target="_blank">
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Expediz</h2>
                  <p className="card__desc">Your Travel Note-taking Web App.</p>
                </div>
                <h3 className="card__lang">React JS</h3>
              </div>
            </a>

            <a href="https://huddle-web-app.netlify.app" target="_blank" >
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Huddle</h2>
                  <p className="card__desc">
                    Landing page built using React and styled-components.
                  </p>
                </div>
                <h3 className="card__lang">Styled-Components</h3>
              </div>
            </a>

            <a href="https://magic-memory-q8ie5xmr4-alberthoxha.vercel.app/" target="_blank">
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Memory Game</h2>
                  <p className="card__desc">
                    I developed this memory game while following a course by
                    NetNinja.
                  </p>
                </div>
                <h3 className="card__lang">React JS</h3>
              </div>
            </a>

            <a href="https://magic-memory-q8ie5xmr4-alberthoxha.vercel.app/" target="_blank">
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Supa Smothie</h2>
                  <p className="card__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <h3 className="card__lang">React JS & Supabase</h3>
              </div>
            </a>
          </div>

          <p className="descp">
            `Indulge in my projects and I sincerely hope that they captivate
            your interest.`
          </p>
        </div>
      </div>
    </div>
  )
}
