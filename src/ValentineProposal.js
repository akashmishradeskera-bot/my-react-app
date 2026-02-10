import { useState } from "react";
import ValentineVideo from "./ValentineVideo";

export default function ValentineProposal() {
  const [noPos, setNoPos] = useState(null);
  const [yesScale, setYesScale] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 350) - 175;
    const randomLeft = Math.floor(Math.random() * 350) - 175;

    setNoPos({ top: randomTop, left: randomLeft });
    setYesScale((prev) => Math.min(prev + 0.25, 3));
  };

  // 👉 AFTER YES CLICK
  if (showVideo) {
    return <ValentineVideo />;
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-pink-100">
      <div className="relative bg-white p-16 rounded-3xl shadow-xl text-center w-[550px]">
        <h1 className="text-3xl font-bold text-pink-600 mb-8">
          Will you be my Valentine? ❤️
        </h1>

        <div className="flex items-center justify-center gap-10 relative h-32">
          {/* YES BUTTON */}
          <button
            onClick={() => setShowVideo(true)}
            className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-xl transition-transform duration-300"
            style={{ transform: `scale(${yesScale})` }}
          >
            Yes
          </button>

          {/* NO BUTTON */}
          <button
            onMouseEnter={moveNoButton}
            className="bg-gray-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-150"
            style={
              noPos
                ? { position: "absolute", top: noPos.top, left: noPos.left }
                : { position: "static" }
            }
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
