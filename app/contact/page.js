import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>


        <div className='container'>
        <div className='global-texture'></div>
            <div className='hero'>
              <div className='contact-button-wrapper'>
                <a href="/home">BACK</a>
              </div>
              <h2>this is</h2> 
              <h1>community guidelines</h1>
            </div>
            <div className='contact-form'>
              <form action="/api/contact" method="POST">
                <div className='form-group'>
                  <label htmlFor='title'>Title:</label>
                  <input type='text' id='title' name='title' placeholder='Enter the title' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='message'>Message:</label>
                  <textarea id='message' name='message' placeholder='Enter your message' required></textarea>
                </div>
                <button type='submit' className='submit-button'>Send</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
