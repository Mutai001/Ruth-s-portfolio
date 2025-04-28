import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import TestimonialsSection from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import WorkHighlightsSection from "./components/Work";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <Element name="home">
        <HomePage />
      </Element>
      
      <Element name="about">
        <Portfolio />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="work">
        <WorkHighlightsSection />
      </Element>
      
      <Element name="testimonials">
        <TestimonialsSection />
      </Element>
      
      <Element name="contact">
        <ContactMe />
      </Element>
      
      <Footer />
    </div>
  );
};

export default App;