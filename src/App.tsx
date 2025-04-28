import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
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
      <Certifications />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
