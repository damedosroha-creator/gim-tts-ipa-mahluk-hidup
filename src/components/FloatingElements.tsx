import React from 'react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Leaves */}
      <div className="absolute top-10 left-12 animate-bounce opacity-40 text-emerald-500">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      </div>

      <div className="absolute bottom-16 right-16 animate-pulse opacity-35 text-amber-500">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      </div>

      {/* Fluttering Butterfly */}
      <div
        className="absolute top-24 right-32 opacity-45 text-rose-500 animate-pulse"
        style={{ animationDuration: '3s' }}
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4C13.5 2.5 16 2 18 3.5C20 5 21 8 20 11C19 14 16 16 13 16C12.5 16 12 15.5 12 15C12 15.5 11.5 16 11 16C8 16 5 14 4 11C3 8 4 5 6 3.5C8 2 10.5 2.5 12 4M12 15C12.5 15 13 16 13 17C13 18.5 15 20.5 16 21C14 22 12.5 21 12 20C11.5 21 10 22 8 21C9 20.5 11 18.5 11 17C11 16 11.5 15 12 15Z" />
        </svg>
      </div>

      <div
        className="absolute bottom-28 left-28 opacity-40 text-sky-500 animate-bounce"
        style={{ animationDuration: '4s' }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4C13.5 2.5 16 2 18 3.5C20 5 21 8 20 11C19 14 16 16 13 16C12.5 16 12 15.5 12 15C12 15.5 11.5 16 11 16C8 16 5 14 4 11C3 8 4 5 6 3.5C8 2 10.5 2.5 12 4Z" />
        </svg>
      </div>
    </div>
  );
};
