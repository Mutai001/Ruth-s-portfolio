import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import HomePage from "./components/HomePage"; // Import the HomePage component

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
     <HomePage />
    </div>
  );
};

export default App;
