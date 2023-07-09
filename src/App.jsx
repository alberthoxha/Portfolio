import "./App.css"
import Projects from "./component/Projects"
import Hero from "./component/Hero"
import About from "./component/About"
import Contact from "./component/Contact"
import NavBar from "./component/NavBar"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
