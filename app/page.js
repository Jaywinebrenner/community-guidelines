"use client";
import { useState, useEffect } from 'react';

export default function Landing() {
  const [isAnimating, setIsAnimating] = useState(false);

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
    const audio = new Audio('/audio/static.wav');
    audio.play();
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
