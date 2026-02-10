import { useState } from "react";

export default function ValentineVideo() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">
      {!playVideo ? (
        <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-[2rem] shadow-2xl text-center max-w-md w-full">
          {/* Decorative hearts */}
          <div className="absolute -top-6 -left-6 text-4xl animate-bounce">💖</div>
          <div className="absolute -top-6 -right-6 text-4xl animate-bounce">💘</div>

          <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
          💕 Love you Niki 💕
          </h2>
          <p className="text-gray-600 mb-8">
            I have a little surprise just for you ✨
          </p>

          <button
            onClick={() => setPlayVideo(true)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            Play Our Moment 🎥 🤍
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 rounded-3xl"></div>

          <div>
          <p className="text-center text-white mt-6 text-xl font-medium">
            Love You Niki  ❤️ 
          </p>
        </div>
          <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-300 w-full max-w-5xl aspect-video max-h-[80vh]">
            <video
              className="w-full h-full object-contain"
              autoPlay
              controls
            >
              <source src="./valentine.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    
        </div>
      )}
    </div>
  );
}
