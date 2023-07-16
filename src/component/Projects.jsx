import "./Projects.css"
import upcorn from "../assets/upcorn.jpg"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="formcontainer">
        <h1>Projects</h1>
        <div className="contents">
          <div className="product-grid">
            <a
              href="https://usepopcorn-ah.vercel.app/"
              target="_blank"
              className="card stacked featured"
              rel="noreferrer"
            >
              <div className="card__content">
                <h2 className="title">Usepopcorn</h2>
                <p className="card__desc">
                  This application is designed to provide a user-friendly
                  interface for browsing and exploring movies.
                </p>
              </div>
              <img src={upcorn} alt="upcornimg" />
              <h3 className="card__lang">React JS</h3>
            </a>

            <a
              href="https://expediz.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Expediz</h2>
                  <p className="card__desc">
                    Expediz is a versatile web application designed to enhance
                    your travel.
                  </p>
                </div>
                <h3 className="card__lang">React JS</h3>
              </div>
            </a>

            <a
              href="https://huddle-web-app.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
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

            <a
              href="https://magic-memory-q8ie5xmr4-alberthoxha.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
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

            <a
              href="https://supa-smoothie.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card stacked">
                <div className="card__content">
                  <h2 className="title">Supa Smothie</h2>
                  <p className="card__desc">
                    This repository contains a CRUD app built using ReactJS and
                    integrated with Supabase
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
