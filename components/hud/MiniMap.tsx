'use client';

import Image from 'next/image';

interface MiniMapProps {
  onEscPress?: () => void;
}

export default function MiniMap({ onEscPress }: MiniMapProps) {
  const handleEsc = () => {
    if (onEscPress) {
      onEscPress();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-56 right-10 z-50 flex flex-col items-end space-y-3">
      {/* ESC Button */}
      <button
        onClick={handleEsc}
        className="bg-black/90 backdrop-blur-sm border-2 border-gta-pink px-5 py-2 text-white hover:bg-gta-pink hover:text-black transition-colors rounded-lg"
      >
        <span className="font-pricedown text-xl tracking-wider">ESC</span>
      </button>

      {/* Mini Map */}
      <div className="minimap w-32 h-32 bg-black/80 backdrop-blur-sm border-2 border-white/40 relative overflow-hidden rounded-lg">
        {/* Map Image */}
        <Image
          src="/images/tambaram-gta-map.webp"
          alt="Mini Map"
          fill
          className="object-cover"
          priority
        />

        {/* Player Marker */}
        <div className="player-marker" />

        {/* Vignette Effect */}
        <div className="minimap-vignette" />

        {/* Scanlines Effect */}
        <div className="minimap-scanlines" />

        {/* Coordinates */}
        <div className="absolute bottom-1 right-1 text-[10px] text-white/60 font-mono z-30">
          GTA-V
        </div>

        <style jsx>{`
          .player-marker {
            position: absolute;
            left: 48%;
            top: 54%;
            width: 11px;
            height: 11px;
            background: #f2f0e8;
            border: 2px solid #0b0d0e;
            transform: rotate(45deg);
            box-shadow:
              0 0 0 2px rgba(242, 240, 232, 0.25),
              0 0 12px rgba(242, 240, 232, 0.35);
            z-index: 10;
          }

          .minimap-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(
                ellipse at center,
                transparent 45%,
                rgba(0, 0, 0, 0.45) 100%
              );
            z-index: 5;
          }

          .minimap-scanlines {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              repeating-linear-gradient(
                0deg,
                rgba(255,255,255,0.015) 0px,
                rgba(255,255,255,0.015) 1px,
                transparent 1px,
                transparent 4px
              );
            z-index: 20;
          }
        `}</style>
      </div>
    </div>
  );
}
