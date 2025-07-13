'use client';

import Navbar from '../components/Navbar';

export default function Events() {
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
          <h2 className="text-4xl font-medium text-[#b03a3a] mb-4 tracking-tight leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>UPCOMING <span className="text-black">EVENTS</span></h2>
          
          <div className="space-y-6">
            {/* Featured Event */}
            <div className="border-2 border-black bg-[#ece9d2] p-6" style={{ borderRadius: 0 }}>
              <h3 className="text-3xl font-medium text-[#b03a3a] font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>MANGA CREATION WORKSHOP</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-medium text-black mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>December 15, 2024 • 2:00 PM EST</p>
                  <p className="text-base text-black font-medium leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    Join us for an intensive workshop on AI-powered manga creation. Learn the fundamentals of storytelling, character design, and panel composition with our expert instructors.
                  </p>
                </div>
                <div className="border border-black p-4 bg-white" style={{ borderRadius: 0 }}>
                  <h4 className="text-lg font-medium text-black font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>WHAT YOU'LL LEARN</h4>
                  <ul className="text-sm text-black font-medium space-y-1" style={{ fontFamily: 'Georgia, serif' }}>
                    <li>• Story structure and pacing</li>
                    <li>• Character development techniques</li>
                    <li>• AI tool optimization</li>
                    <li>• Publishing and sharing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Event List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>COMMUNITY SHOWCASE</h3>
                <p className="text-base font-medium text-black mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>December 22, 2024 • 7:00 PM EST</p>
                <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                  Share your latest manga creations with the community. Get feedback, connect with other creators, and celebrate the art of storytelling.
                </p>
              </div>
              
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>AI TOOLS MASTERCLASS</h3>
                <p className="text-base font-medium text-black mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>January 5, 2025 • 3:00 PM EST</p>
                <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                  Deep dive into advanced AI features. Learn professional techniques for creating consistent characters and compelling visual narratives.
                </p>
              </div>
              
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>COLLABORATION CONTEST</h3>
                <p className="text-base font-medium text-black mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>January 15 - February 15, 2025</p>
                <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                  Team up with other creators for our monthly collaboration contest. Win prizes and get your work featured on our homepage.
                </p>
              </div>
              
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>GUEST ARTIST TALK</h3>
                <p className="text-base font-medium text-black mb-2" style={{ fontFamily: 'Chunk, sans-serif' }}>January 20, 2025 • 6:00 PM EST</p>
                <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                  Special guest appearance by renowned manga artist Akira Yamamoto. Learn about traditional techniques and modern digital workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 