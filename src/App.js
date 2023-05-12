import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");


  function onWindowMatch() {
    if(localStorage.theme === "dark" || (!("theme" in localStorage ) && darkQuery.matches)){
      element.classList.add("dark");
    } else {
      element.classList.remove("dark")
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

        case "light":
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
          break;
    
      default:
         localStorage.removeItem("theme");
        
        break;
    }
  }, [theme, element])

  darkQuery.addEventListener("change", (e) => {
    if(!("theme" in localStorage)){
      if(e.matches){
        element.classList.add("dark");
      } else {
        element.classList.remove("dark")
      }
    }
  })


  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Works />
      <Experience />
      <Skills />
      <Contact />
      <ScrollToTop/>
    </>
  );
};

export default App;
