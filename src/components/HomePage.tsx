import { useState } from "react";

export default function HeroSection() {
  const [, setIsHovered] = useState(false);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-500 to-purple-700 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-black/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative rounded-full overflow-hidden h-40 w-40">
              <img
                src="/api/placeholder/400/400"
                alt="Portfolio Owner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                Developer Name
              </span>
            </h1>
            
            <p className="text-lg text-white/90 mb-6">
              Full-stack developer specializing in React, Node.js and modern web technologies. 
              Creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore My Work
              </button>
              
              <a 
                href="#" 
                download
                className="px-6 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Badges */}
        <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-3">
          <span className="px-3 py-1 bg-black/30 text-white rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-black/30 text-white rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-black/30 text-white rounded-full text-sm">Node.js</span>
          <span className="px-3 py-1 bg-black/30 text-white rounded-full text-sm">Tailwind CSS</span>
          <span className="px-3 py-1 bg-black/30 text-white rounded-full text-sm">MongoDB</span>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Animation elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>
    </div>
  );
}