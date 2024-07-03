"use client";
import { useState, useEffect, useRef } from 'react';

export default function Landing() {
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload the audio file
    audioRef.current = new Audio('/audio/static.mp3');
    audioRef.current.load();
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    playStaticSound(); // Play the sound effect on click
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        window.location.href = '/home'; // Navigate to the HOME page after the animation
      }, 3000); // Adjust the duration to match the animation duration

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const playStaticSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to the beginning in case it was played before
      audioRef.current.play();
    }
  };

  return (
    <main className={`landing ${isAnimating ? 'flash-animation' : ''}`}>
      <div className="landing-wrapper">
        <a onClick={handleClick} href="#" role="button">
          <h1 className={`animated-text ${isAnimating ? 'text-flash-animation' : ''}`}>COMMUNITY GUIDELINES</h1>
        </a>
      </div>
    </main>
  );
}
