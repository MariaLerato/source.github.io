import React from 'react'
import './stylesheet.css'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='first-profile'>
        <div className='first-container'>
          <div className='icon'>
            <i className='fa fa-user fa-5x' />
          </div>
          <div className='name-details'>
            <h1>Maria Fenyane</h1>
            <h4>Software Developer</h4>
            Trainee at CodeTribe mlab
          </div>
        </div>
        <div className='email-container'>
          <div className='email-left'>
            <i className='fa fa-envelope fa-5x' />
          </div>
          <div className='email-right'>
            <h1>Email Address</h1>
            fenyane02@gmail.com
          </div>
        </div>
        <div className='facebook-container'>
          <div className='facebook-left'>
            <i className='fa fa-facebook-f fa-5x' />
          </div>
          <div className='facebook-right'>
            <h1>Facebook</h1>
            facebook.com/Maria_Lerato
          </div>
        </div>
        <div className='linkedin-container'>
          <div className='linkedin-left'>
            <i className='fa fa-linkedin fa-5x' />
          </div>
          <div className='linkedin-right'>
            <h1>LinkedIn</h1>
            maria fenyane
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile
