
"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, message }),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      
      const result = await res.json();
      setSuccess(result.message);
      setTitle('');
      setMessage('');
    } catch (error) {
      setError('Error sending email');
    }
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='global-texture'></div>
        <div className='hero'>
          <div className='contact-button-wrapper'>
            <a href="/home">BACK</a>
          </div>
          <h2>contact</h2>
          <h1>community guidelines</h1>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Enter the title'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type='submit' className='submit-button'>Send</button>
          </form>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
