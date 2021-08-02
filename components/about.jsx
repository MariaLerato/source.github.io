import React from 'react'
import './stylesheet.css'
import 'font-awesome/css/font-awesome.min.css'
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-wrapper'>
        <div className='about-left'>
          <img src='me.jpg' alt='me' />
          <h1>Maria Fenyane</h1>
          <h4>Software Developer</h4>
          <br />
          <h4>INFO</h4>
          <i className='fa fa-user fa-2x'>Name</i><br />
          <p>Fenyane Maria</p><br />
          <i className='fa fa-phone fa-2x'>Phone number</i><br />
          <p>0793879978</p><br />
          <i className='fa fa-envelope fa-2x'>Email Address</i>
          <p>  fenyane02@gmail</p>
          <i className='fa fa-map-marker fa-2x'>Home Address</i>
          <p> 287 ZONE Q<br />
            Lebowakgomo<br />
            Limpopo<br />
            South Africa
          </p><br />

          <h4> SOCIAL</h4>
          <i className='fa fa-linkedin fa-2x'>LinkedIn</i><br />
          <p> maria fenyane</p>
          <i className='fa fa-facebook-f fa-2x'> Facebook</i>
          <p>facebook.com/Maria_Lerato</p>
        </div>
        <div className='about-right'>
          <i className='fa fa-user fa-2x'> Profile</i>
          <p>Enthuastic IT programmer with 6 months experience in software development.Comfortable working with different IDEs. Able to create web applications and pages.Skilled in HTML 5, CSS3 and JavaScript,jsx.
          </p>
          <i className='fa fa-pencil fa-2x'>Work Experience</i>
          <div className='work-container'>
            <div className='work-left'>
              June 2021 -December 2021
            </div>
            <div className='work-right'>
              <h3>Software Development Trainee</h3>
              <h5>CodeTribe mlab South Africa</h5>
              <p>Trained in developing softwares, creating websites. Being comfortable with different JavaScript language.Trained in soft skills, ad scrum</p>
            </div>
          </div>

          <i className='fa fa-book fa-2x'>EDUCATION</i>
          <div className='edu-container'>
            <div className='edu-left'>
              2013 - 2017
              <br />
              <br />
              <br />
              2018 - 2020
            </div>
            <div className='edu-right'>
              <h5>Derek Kobe Senior Secondary</h5>
              Grade 12 in Mathematics and Science
              <h5>Capricorn Tvet College</h5>
              NC(V) Level 4 in Information Technology and Computer Science
            </div>
          </div>
          <i className='fa fa-glass fa-2x'>Skills and Expertise</i>
          <div className='skills-container'>
            <div className='skills-left'>
              <h6>Skills</h6>
              <ul>
                <li><i class='fa fa-html5'>HTML5</i></li>
                <li><i class='fa fa-css3'>CSS3</i></li>
                <li><i class='fa fa-laptop'>JavaScript</i></li>
                <li> <i class='fa fa-file'>Ms Word</i></li>
              </ul>
            </div>
            <div className='skills-right'>
              <h6>Expertise</h6>
              <ul>
                <li>Ms Word</li>
                <li>Ms Access</li>
                <li>Ms Excel</li>
                <li>html5</li>
                <li>css3</li>
              </ul>
            </div>
          </div>
          <i className='fa fa-heart fa-2x'>Hobbies</i><br />
          <div className='hobby'>
            <i className='fa fa-music fa-2x' />
            <i className='fa fa-laptop fa-2x' />
            <i className='fa fa-book fa-2x' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
