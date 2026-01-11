
import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"
import { useRef } from "react";
function App() {
  const contactRef = useRef(null);
  return (
    <div>
    <Header />
    <Hero/>
    <About/>
    <Skills/>
    <Experience />
    <Contact />
    </div>
  )
}

export default App