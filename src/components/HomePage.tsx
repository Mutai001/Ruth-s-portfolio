import { useState } from "react";

export default function HeroSection() {
  // State for tracking button hover state that's actually used in the UI
  const [portfolioButtonHovered, setPortfolioButtonHovered] = useState(false);
  
  return (
    <div className="relative w-full min-h-screen bg-red-500 flex flex-col items-center justify-center px-4 py-16">
      {/* Main container with explicit z-index */}
      
      <div className="relative z-10 max-w-4xl w-full bg-blue-500 rounded-2xl p-8 md:p-12 shadow-2xl">
        {/* Increased z-index to ensure visibility */}
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-green-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            
            <div className="relative rounded-full overflow-hidden h-40 w-40">
              <img
                src="/api/placeholder/400/400"
                alt="Ruth Kimeli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-purple-400">
                Ruth Kimeli
              </span>
            </h1>
            
            <p className="text-lg text-orange-400 mb-6">
              Social Media Manager crafting engaging digital stories and building meaningful online communities.
              Turning followers into fans and clicks into customers.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button 
                className={`px-6 py-3 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-lg transition-all duration-300 transform ${portfolioButtonHovered ? "-translate-y-1 shadow-xl" : "shadow-lg"}`}
                onMouseEnter={() => setPortfolioButtonHovered(true)}
                onMouseLeave={() => setPortfolioButtonHovered(false)}
              >
                View My Portfolio
              </button>
              
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Media Kit
              </a>
            </div>
          </div>
        </div>
        
        {/* Expertise Badges */}
        <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-3">
          <span className="px-3 py-1 bg-red-800 text-white rounded-full text-sm">Content Strategy</span>
          <span className="px-3 py-1 bg-blue-800 text-white rounded-full text-sm">Community Management</span>
          <span className="px-3 py-1 bg-green-800 text-white rounded-full text-sm">Analytics</span>
          <span className="px-3 py-1 bg-yellow-800 text-white rounded-full text-sm">Paid Campaigns</span>
          <span className="px-3 py-1 bg-purple-800 text-white rounded-full text-sm">Brand Development</span>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="#" className="text-yellow-300 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-yellow-300 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-yellow-300 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="text-yellow-300 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-yellow-300 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.374 17c-.897 0-1.626-.727-1.626-1.624s.729-1.624 1.626-1.624 1.626.727 1.626 1.624-.729 1.624-1.626 1.624zm3.885 0c-.03-3.022-2.485-5.474-5.511-5.504v-2.406c4.361.03 7.889 3.555 7.92 7.91h-2.409zm4.081 0c-.016-5.297-4.303-9.571-9.592-9.594v-2.406c6.623.023 11.985 5.384 12 12h-2.408z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Animation elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-500 blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500 blur-3xl opacity-50"></div>
        {/* Added opacity to make them visible but not overwhelming */}
      </div>
      
      {/* Debug element with higher z-index */}
      <div className="absolute top-4 left-4 bg-black text-white p-2 rounded z-50">
        Debug: If you can see this text in white and the background in black, colors are working
      </div>
    </div>
  );
}