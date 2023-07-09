import arrow from "../assets/arrow-ico.svg"
import "./Hero.css"
import { Link } from "react-scroll"

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h5>
            A Design Graduated`s <br />
            Passion for Code-driven <br />
            Excellence
          </h5>
          <div className="arrow">
            <Link
              className="btn-scroll"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        {/* 
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeMenu}
          className="logo"
        >
          <h2>Albert Hoxha</h2>
        </Link> */}
        {/* <div className="hero">
          <div className="content">
            <p>Call us</p>
            <p>1-800-123-4567</p>
            <p>Because Money</p>
            <p>Doesn't come with instructions</p>
            <button href="/" className="button">
              Free Consultation
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Hero
