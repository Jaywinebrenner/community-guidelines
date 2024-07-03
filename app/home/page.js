"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const records = [
    {
      band: "Limerance",
      album: "S/T",
      img: "/albums/limerance.jpg",
      soldOut: true
    },
    {
      band: "Pandra",
      album: "S/T",
      img: "/albums/pandra.jpg",
      soldOut: true
    },
    {
      band: "Colonies",
      album: "Hack Hymns",
      img: "/albums/colonies.jpg" ,
      soldOut: true
    },
    {
        band: "Grayson Wilkins Jr.",
        album: "Newport",
        img: "/albums/grayson.jpg" ,
        soldOut: true
    },
    {
        band: "Vultus",
        album: "S/T",
        img: "/albums/vultus.webp" ,
        soldOut: true
    },
    {
        band: "Main Squeeze",
        album: "Summer Solstice",
        img: "/albums/main-squeeze.webp" ,
        soldOut: true
    },
    {
        band: "Submission State",
        album: "Never Adventures with the Blind",
        img: "/albums/submission-state.webp" ,
        soldOut: true
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [blackScreenVisible, setBlackScreenVisible] = useState(true);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      setBlackScreenVisible(false);
    }, 2000); // Fade out after 2 seconds

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollPosition * 0.005; 

  return (
    <div className='home'>
      {blackScreenVisible && <div className='black-screen'></div>}
      <div className='global-texture'></div>
      <div className='contact-button-wrapper' style={{ transform: `rotate(${rotation}deg)` }}>
        <a href="/contact">CONTACT</a>
      </div>
      <div className='container'>
        <div className='hero'>
          <h2>this is</h2> 
          <h1>community guidelines</h1>
        </div>
        <div className='records'>
          {records.map((record, index) => (
            <Link 
              href={record.soldOut ? '#' : `/record/${index}`} 
              key={index} 
              legacyBehavior
            >
              <a className={`record ${record.soldOut ? 'disabled' : ''}`}>
                <img src={record.img} alt={`${record.band} - ${record.album}`} />
                <div className='record-info'>
                    <p>{record.band} - {record.album}</p>
                    {record.soldOut && <p className='sold-out'>SOLD OUT</p>}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
