import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
// import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
     {/* <HomePage /> */}
      <Portfolio />
    </div>
  );
};

export default App;
