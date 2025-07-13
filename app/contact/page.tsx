'use client';

import Navbar from '../components/Navbar';

export default function Contact() {
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
          <h2 className="text-4xl font-medium text-[#b03a3a] mb-4 tracking-tight leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>CONTACT <span className="text-black">US</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>GET IN TOUCH</h3>
                <div className="space-y-3">
                  <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-lg font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>EMAIL SUPPORT</h4>
                    <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>support@mangaclub.com</p>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Response time: 24-48 hours</p>
                  </div>
                  <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-lg font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>LIVE CHAT</h4>
                    <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Available 9 AM - 6 PM EST</p>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Monday - Friday</p>
                  </div>
                  <div className="border border-black p-3 bg-white" style={{ borderRadius: 0 }}>
                    <h4 className="text-lg font-medium text-black font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>COMMUNITY FORUM</h4>
                    <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Get help from other users</p>
                    <p className="text-sm text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
                <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>OFFICE HOURS</h3>
                <div className="space-y-2">
                  <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="border-2 border-black bg-[#ece9d2] p-4" style={{ borderRadius: 0 }}>
              <h3 className="text-2xl font-medium text-black font-chunk mb-3" style={{ fontFamily: 'Chunk, sans-serif' }}>SEND MESSAGE</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-base font-medium text-black font-chunk mb-1" style={{ fontFamily: 'Chunk, sans-serif' }}>NAME</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border-2 border-black bg-white font-medium" 
                    style={{ borderRadius: 0, fontFamily: 'Georgia, serif' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-black font-chunk mb-1" style={{ fontFamily: 'Chunk, sans-serif' }}>EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border-2 border-black bg-white font-medium" 
                    style={{ borderRadius: 0, fontFamily: 'Georgia, serif' }}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-black font-chunk mb-1" style={{ fontFamily: 'Chunk, sans-serif' }}>SUBJECT</label>
                  <select 
                    className="w-full p-2 border-2 border-black bg-white font-medium" 
                    style={{ borderRadius: 0, fontFamily: 'Georgia, serif' }}
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Bug Report</option>
                  </select>
                </div>
                <div>
                  <label className="block text-base font-medium text-black font-chunk mb-1" style={{ fontFamily: 'Chunk, sans-serif' }}>MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full p-2 border-2 border-black bg-white font-medium resize-none" 
                    style={{ borderRadius: 0, fontFamily: 'Georgia, serif' }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-2 px-4 border-2 border-black bg-[#b03a3a] text-white font-medium font-chunk hover:bg-[#8b2a2a] transition-colors duration-150"
                  style={{ borderRadius: 0, fontFamily: 'Chunk, sans-serif' }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 