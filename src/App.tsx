import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome to My App!
        </h1>
      </div>
    </div>
  );
};

export default App;
