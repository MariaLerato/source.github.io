import React from 'react'
import './stylesheet.css'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='home'>
        <h1>Welcome To The Future</h1>
        <p className='para'>
          Coding is inevitably our new tomorrow. Machine learning has become a fast approaching mandatory thing to do. And this, is just the beginning.
        </p>
        <i><b>Greater things are yet to come,,are you ready?!</b></i>
      </div>
      <div className='form'>
        <fieldset>
          <h2>Register</h2>
            <label>
              Name:
              <input type='text' placeholder='enter your name' />
            </label>
            <label>
              Surname: <input type='text' placeholder='enter your surname' />
            </label>
            <label>
              Password: <input type='password' />
            </label>
            
              <button type='Submit'>Submit Details</button>
            
            
              <input type='Reset' value='Reset'></input>
            
          </fieldset>
      </div>
    </div>
  )
}
export default Home
