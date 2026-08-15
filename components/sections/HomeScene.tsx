'use client';

export default function HomeScene({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="flex items-center justify-center h-full pointer-events-none">
      {/* Empty - name and objective are in HUD */}
    </div>
  );
}
