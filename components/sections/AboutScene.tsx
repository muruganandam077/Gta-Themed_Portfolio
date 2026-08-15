'use client';

export default function AboutScene({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="flex items-center justify-start h-full px-16 pt-48 pb-20" style={{ letterSpacing: '0.15em' }}>
      <div className="max-w-6xl w-full text-left">
        <div className="space-y-8">
          {/* Intro paragraph */}
          <p className="text-4xl font-rage text-white leading-relaxed max-w-2xl mb-10" style={{ lineHeight: '1.8', }}>
            Hey, I'm Muruganandam. A Software developer, designer and AI creator who builds digital experiences that aren't just functional — they're memorable.
          </p>

          {/* Info items - No containers */}
          <div className="space-y-7 max-w-xl">
            {/* Age */}
            <div className="flex items-center space-x-6">
              <div className="text-3xl">👤</div>
              <div>
                <div className="text-5xl font-pricedown text-white mb-2">AGE</div>
                <div className="text-2xl font-rage text-white/80">20 – Final year B.Tech AI-DS</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-6">
              <div className="text-3xl">📍</div>
              <div>
                <div className="text-2xl font-pricedown text-white mb-2">LOCATION</div>
                <div className="text-xl font-rage text-white/80">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
