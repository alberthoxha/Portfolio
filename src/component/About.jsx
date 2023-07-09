import { skills } from "../data"
import { BsMeta } from "react-icons/bs"

import "./About.css"

const About = () => {
  return (
    <div className="skills" id="about">
      <div className="formcontainer">
        <h1>Skills & Certification</h1>
        <div className="contents">
          <div className="cert">
            <div className="list">
              <h2>Graduated with a bachelor`s degree in Graphic Design</h2>
              <a href="https://www.coursera.org/account/accomplishments/certificate/C38SJR4YXHWY">
                <p>
                  Html & Css in depth
                  <span>
                    <h5>Meta</h5>
                    <BsMeta />
                  </span>
                </p>
              </a>

              <a href="https://www.coursera.org/account/accomplishments/certificate/4QS5U82U74V4">
                <p>
                  Version Control
                  <span>
                    <h5>Meta</h5>
                    <BsMeta />
                  </span>
                </p>
              </a>

              <a href="https://www.coursera.org/account/accomplishments/certificate/VFTSGBMKM5P3">
                <p>
                  Programming with Javascript
                  <span>
                    <h5>Meta</h5>
                    <BsMeta />
                  </span>
                </p>
              </a>
            </div>

            <div className="skills-card">
              {skills.map((skill) => {
                return <p key={skill.id}>{skill.title}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
