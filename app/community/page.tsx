'use client';

import Navbar from '../components/Navbar';

export default function Community() {
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
          <h2 className="text-4xl font-medium text-[#b03a3a] mb-4 tracking-tight leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>COMMUNITY <span className="text-black">HUB</span></h2>
          
          <div className="space-y-6">
            {/* Featured Creator */}
            <div className="border-2 border-black bg-[#ece9d2] p-6" style={{ borderRadius: 0 }}>
              <h3 className="text-3xl font-medium text-[#b03a3a] font-chunk mb-4" style={{ fontFamily: 'Chunk, sans-serif' }}>FEATURED CREATOR</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-black p-4 bg-white" style={{ borderRadius: 0 }}>
                  <div className="w-full h-32 bg-[#d7d3b3] border border-black flex items-center justify-center mb-2" style={{ borderRadius: 0 }}>
                    <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>Creator Avatar</span>
                  </div>
                  <h4 className="text-lg font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>@SAKURA_ARTIST</h4>
                </div>
                <div className="md:col-span-2">
                  <p className="text-base text-black font-medium leading-relaxed mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    "I've been creating manga for 5 years, but Manga Club's AI tools have revolutionized my workflow. The community here is incredibly supportive and inspiring!"
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <p className="text-2xl font-medium text-[#b03a3a] font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>127</p>
                      <p className="text-sm font-medium text-black" style={{ fontFamily: 'Georgia, serif' }}>Manga Created</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-medium text-[#b03a3a] font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>2.3K</p>
                      <p className="text-sm font-medium text-black" style={{ fontFamily: 'Georgia, serif' }}>Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Community Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>DISCUSSION FORUMS</h3>
                <div className="space-y-2">
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>Story Development</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>342 posts • 89 active today</p>
                  </div>
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>AI Tools & Tips</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>256 posts • 67 active today</p>
                  </div>
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>Feedback & Critique</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>198 posts • 45 active today</p>
                  </div>
                </div>
              </div>
              
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>COLLABORATION BOARD</h3>
                <div className="space-y-2">
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>Looking for Writer</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Sci-fi manga project needs story writer</p>
                  </div>
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>Artist Wanted</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Romance manga needs character designer</p>
                  </div>
                  <div className="border border-black p-2 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>Team Formation</h4>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Starting new fantasy manga series</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Showcases */}
            <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
              <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>RECENT SHOWCASES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                  <div className="w-full h-24 bg-[#d7d3b3] border border-black flex items-center justify-center mb-2" style={{ borderRadius: 0 }}>
                    <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>Manga Preview</span>
                  </div>
                  <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>CYBER DREAMS</h4>
                  <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>by @techno_artist</p>
                </div>
                <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                  <div className="w-full h-24 bg-[#d7d3b3] border border-black flex items-center justify-center mb-2" style={{ borderRadius: 0 }}>
                    <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>Manga Preview</span>
                  </div>
                  <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>MAGIC ACADEMY</h4>
                  <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>by @fantasy_creator</p>
                </div>
                <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                  <div className="w-full h-24 bg-[#d7d3b3] border border-black flex items-center justify-center mb-2" style={{ borderRadius: 0 }}>
                    <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>Manga Preview</span>
                  </div>
                  <h4 className="text-base font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>STREET FIGHTER</h4>
                  <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>by @action_master</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 