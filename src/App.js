// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// TODO: go through and save all files
// TODO: fix all warnings
// TODO: Move all consts to const files
// TODO: add links
// TODO: check all text
// TODO: add animatons

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className=" bg-altBlue py-16 w-100">
        <h5 className="text-center">Designed & Developed by Dylan Harden</h5>
      </footer>
    </>
  );
}

export default App;
