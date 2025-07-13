'use client';

import Navbar from '../components/Navbar';

export default function About() {
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
        <div className="w-full border-2 border-black bg-[#d7d3b3] p-6" style={{ borderRadius: 0 }}>
          <h2 className="text-4xl font-medium text-[#b03a3a] mb-4 tracking-tight leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>ABOUT <span className="text-black">US</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>OUR MISSION</h3>
              <p className="text-base text-black font-medium leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Manga Club is revolutionizing the way stories are told. We believe that everyone has a story worth sharing, and with the power of AI, we're making manga creation accessible to all.
              </p>
              
              <h3 className="text-2xl font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>OUR VISION</h3>
              <p className="text-base text-black font-medium leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                To create a world where creativity knows no bounds, where technology amplifies human imagination, and where every dreamer can become a storyteller.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>WHAT WE OFFER</h3>
              <ul className="text-base text-black font-medium leading-relaxed space-y-2" style={{ fontFamily: 'Georgia, serif' }}>
                <li>• AI-powered manga generation</li>
                <li>• Intuitive story creation tools</li>
                <li>• Community collaboration features</li>
                <li>• Professional publishing support</li>
                <li>• Educational resources and tutorials</li>
              </ul>
              
              <h3 className="text-2xl font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>JOIN US</h3>
              <p className="text-base text-black font-medium leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Whether you're a seasoned artist or a complete beginner, Manga Club welcomes you to explore the endless possibilities of storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 