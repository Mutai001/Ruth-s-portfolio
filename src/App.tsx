import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import TestimonialsSection from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import WorkHighlightsSection from "./components/Work";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
     <HomePage />
      <Portfolio />
      <WorkHighlightsSection />
      <TestimonialsSection/>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
