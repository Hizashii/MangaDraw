'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

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
        <div className="w-full flex flex-col md:flex-row gap-4 border-2 border-black bg-[#d7d3b3] p-4" style={{ borderRadius: 0 }}>
          {/* Manga Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center justify-start">
            <div className="w-full aspect-[3/4] bg-[#ece9d2] border-2 border-black flex items-center justify-center text-gray-600 text-xl font-medium mb-4 overflow-hidden" style={{ borderRadius: 0, minHeight: '320px' }}>
              <Image
                src="/musashi.jpg"
                alt="Manga Image"
                width={320}
                height={427}
                className="object-cover w-full h-full"
                style={{ borderRadius: 0 }}
                priority
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-between pl-0 md:pl-6">
            <div>
              <h2 className="text-5xl font-medium text-[#b03a3a] mb-2 tracking-tight leading-none font-chunk" style={{ fontFamily: 'Chunk, sans-serif' }}>MANGA <span className="text-black">CLUB</span></h2>
              <p className="mb-4 text-base text-black font-medium leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Welcome to Manga Club — your creative playground for making manga like never before. Powered by the latest AI technology, this is where imagination takes form, one panel at a time.
                <br /><br />
                At Manga Club, you don't need to be a professional artist to bring your stories to life. Whether you're a writer, a dreamer, or just a fan of manga, our tools help you craft original worlds, unforgettable characters, and visually stunning pages — no drawing skills required.
                <br /><br />
                🖋️ <b>Write. Generate. Share.</b><br />
                Turn your ideas into manga effortlessly. Collaborate with others, experiment with styles, and build your own library of creations. The next big story could be yours — and it all starts here.
              </p>
            </div>
          </div>
        </div>
        {/* Featured Manga Section */}
        <div className="w-full border-2 border-black bg-[#ece9d2] p-4 flex flex-col gap-2" style={{ borderRadius: 0 }}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-shrink-0 w-full md:w-1/2 border-2 border-black bg-white flex items-center justify-center font-chunk font-medium" style={{ borderRadius: 0, minHeight: '120px', fontFamily: 'Chunk, sans-serif' }}>
              <span className="text-3xl font-medium text-black tracking-widest">ONE PIECE</span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-lg font-medium text-black mb-1" style={{ fontFamily: 'Georgia, serif' }}>CAPÍTULO 1087: "BUQUES DE GUERRA DE ENTRENAMIENTO"</div>
              <div className="w-full h-24 bg-[#d7d3b3] border-2 border-black flex items-center justify-center text-gray-500 font-medium" style={{ borderRadius: 0, fontFamily: 'Georgia, serif' }}>
                <span>Page Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
