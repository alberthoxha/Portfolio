import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-scroll"

import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={closeMenu}
          className="logo"
        >
          <h2>Albert Hoxha</h2>
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

          <span className="social">
            <a href="https://www.linkedin.com/in/alberthooxha">
              <FaLinkedin id="linkedin" size={30} color="#ffff" />
            </a>
            <a href="https://github.com/alberthoxha">
              {" "}
              <FaGithubSquare id="github" size={30} color="#ffff" />
            </a>
          </span>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
