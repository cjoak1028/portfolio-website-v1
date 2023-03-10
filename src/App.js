import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BsArrowDownShort } from "react-icons/bs";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <div className={styles.prompt}>
          <p>Check out some of my work </p>
          <BsArrowDownShort className={styles["arrow-icon"]} />
        </div>
        <Element name="projects">
          <Projects />
        </Element>
        <div className={`${styles.prompt} ${styles["prompt--rev"]}`}>
          <BsArrowDownShort className={styles["arrow-icon"]} />
          <p>Get in touch </p>
        </div>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
      <div className={styles["side-element"]}>
        <div className={styles["contact"]}>
          <p>changju.kim10@gmail.com</p>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
}

export default App;
