'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Create() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    // After 3 seconds, hide animation and show grid
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setShowGrid(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center py-8">
      <div className="w-full max-w-5xl border-[6px] border-[#d7d3b3] bg-[#d7d3b3] p-4 flex flex-col gap-4" style={{ boxShadow: 'none', borderRadius: 0 }}>
        {/* Header */}
        <div className="w-full border-4 border-black bg-black text-[#eae6c7] px-4 py-2" style={{ borderRadius: 0 }}>
          <h1 className="text-7xl font-medium tracking-widest text-center leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>マンガクラブ</h1>
        </div>
        
        {/* Nav Bar */}
        <Navbar />
        
        {/* Main Content */}
        <div className="w-full border-2 border-black bg-[#d7d3b3] p-6 min-h-[500px] relative overflow-hidden" style={{ borderRadius: 0 }}>
          <AnimatePresence mode="wait">
            {showAnimation && (
              <motion.div
                key="pen-animation"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Paper Background */}
                <div className="w-full h-full bg-[#fffbe9] border-2 border-black relative" style={{ borderRadius: 0 }}>
                  {/* Pen Drawing Animation */}
                  <motion.div
                    initial={{ x: -100, y: 100 }}
                    animate={{ 
                      x: [100, 200, 300, 400, 200, 100],
                      y: [100, 150, 200, 250, 300, 350],
                    }}
                    transition={{ 
                      duration: 2.5,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      ease: "easeInOut"
                    }}
                    className="absolute w-8 h-8 bg-[#8B4513] transform rotate-45"
                    style={{ borderRadius: 0 }}
                  />
                  
                  {/* Ink Trail */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  >
                    <motion.path
                      d="M 100 100 Q 200 150 300 200 Q 400 250 200 300 Q 100 350 100 100"
                      stroke="#000"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  
                  {/* Magic Sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400"
                      style={{ 
                        left: `${20 + i * 60}px`,
                        top: `${150 + i * 30}px`,
                        borderRadius: 0
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: i * 0.3,
                        repeat: 2
                      }}
                    />
                  ))}
                  
                  {/* Text appearing */}
                  <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-medium text-black font-chunk text-center" style={{ fontFamily: 'Chunk, sans-serif' }}>
                      CREATING MAGIC...
                    </h2>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {showGrid && (
              <motion.div
                key="grid-interface"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full"
              >
                <h2 className="text-4xl font-medium text-[#b03a3a] mb-6 tracking-tight leading-none font-chunk text-center" style={{ fontFamily: 'Chunk, sans-serif' }}>
                  CREATE YOUR <span className="text-black">MANGA</span>
                </h2>
                
                {/* Book-like Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="border-2 border-black bg-[#fffbe9] p-4 hover:bg-[#f0ebd2] transition-colors duration-200 cursor-pointer"
                      style={{ borderRadius: 0, minHeight: '120px' }}
                    >
                      <div className="w-full h-16 bg-[#e0d6b8] border border-black mb-2 flex items-center justify-center" style={{ borderRadius: 0 }}>
                        <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                          Panel {i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>
                        {['NEW STORY', 'CHARACTER', 'BACKGROUND', 'DIALOGUE', 'EFFECTS', 'PUBLISH'][i]}
                      </h3>
                    </motion.div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex justify-center gap-4 mt-8"
                >
                  <button className="px-6 py-3 border-2 border-black bg-[#b03a3a] text-white font-medium font-chunk hover:bg-[#8b2a2a] transition-colors duration-150" style={{ borderRadius: 0, fontFamily: 'Chunk, sans-serif' }}>
                    START CREATING
                  </button>
                  <button className="px-6 py-3 border-2 border-black bg-[#fffbe9] text-black font-medium font-chunk hover:bg-[#f0ebd2] transition-colors duration-150" style={{ borderRadius: 0, fontFamily: 'Chunk, sans-serif' }}>
                    LOAD PROJECT
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 