'use client';

import { useRef, useEffect } from 'react';

interface VideoSceneProps {
  video: string;
  isActive: boolean;
  opacity?: number;
  className?: string;
}

export default function VideoScene({
  video,
  isActive,
  opacity = 1,
  className = ''
}: VideoSceneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isActive) {
      videoElement.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    } else {
      videoElement.pause();
    }
  }, [isActive]);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
    >
      <video
        ref={videoRef}
        src={video}
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
