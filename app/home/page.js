"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

const Home = () => {
  const records = [
    {
      band: "Street Nights",
      album: "The Long Goodbye",
      img: "/albums/the-long-goodbye.png",
      soldOut: false,
      albumLink: "https://streetnights.bandcamp.com/album/the-long-goodbye",
      message: "Pre-order Now"
    },
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
      img: "/albums/colonies.jpg",
      soldOut: true
    },
    {
      band: "Grayson Wilkins Jr.",
      album: "Newport",
      img: "/albums/grayson.jpg",
      soldOut: true,
      // audioPreview: "/albumAudioPreviews/gary-wilkins.mp3"
    },
    {
      band: "Vultus",
      album: "S/T",
      img: "/albums/vultus.webp",
      soldOut: true
    },
    {
      band: "Main Squeeze",
      album: "Summer Solstice",
      img: "/albums/main-squeeze.webp",
      soldOut: true
    },
    {
      band: "Submission State",
      album: "Never Adventures with the Blind",
      img: "/albums/submission-state.webp",
      soldOut: true
    },
    {
      band: "Petulant",
      album: "S/T",
      img: "/albums/petulant.webp",
      soldOut: true
    },
  ];

  const [blackScreenVisible, setBlackScreenVisible] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBlackScreenVisible(false);
    }, 2000);
  }, []);

  const openModal = (audioPreview) => {
    setCurrentAudio(audioPreview);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentAudio('');
  };

  return (
    <div className='home'>
      {blackScreenVisible && <div className='black-screen'></div>}
      <div className='global-texture'></div>

      <div className='container'>
        <div className='hero'>
          <div className='contact-button-wrapper'>
            <a href="/contact">CONTACT</a>
          </div>
          <h2>this is</h2> 
          <h1>community guidelines</h1>
        </div>
        <div className='records'>
          {records.map((record, index) => (
            record.albumLink ? (
              <a key={index}
                className='record'
                href={record.albumLink}
                target='_blank'
                style={{ cursor: 'pointer' }}
              >
                <img src={record.img} alt={`${record.band} - ${record.album}`} />
                <div className='record-info'>
                  <p>{record.band} - {record.album}</p>
                  {record.soldOut && <p className='sold-out'>SOLD OUT</p>}
                  {record.message && <p className='sold-out'>PRE-ORDER NOW</p>}
                  {record.audioPreview && (
                    <button onClick={() => openModal(record.audioPreview)} className="audio-preview-button">
                      LISTEN
                    </button>
                  )}
                </div>
              </a>
            ) : (
              <div key={index} className='record' style={{ cursor: 'not-allowed' }}>
                <img src={record.img} alt={`${record.band} - ${record.album}`} />
                <div className='record-info'>
                  <p>{record.band} - {record.album}</p>
                  {record.soldOut && <p className='sold-out'>SOLD OUT</p>}
                  {record.audioPreview && (
                    <button onClick={() => openModal(record.audioPreview)} className="audio-preview-button">
                      LISTEN
                    </button>
                  )}
                </div>
              </div>
            )
          ))}
        </div>

      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Audio Preview"
        className="audio-modal"
        overlayClassName="audio-modal-overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        {currentAudio && <audio className='audio-player' controls src={currentAudio} />}
      </Modal>
    </div>
  )
}

export default Home;
