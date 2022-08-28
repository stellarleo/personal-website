import React from 'react'
import './main.css'

export default function Main() {
  return (
   <div className='wrapper' >
        <div className='mainContainer' >
            <div className='div-animation home' >
              <div className="title-animation homeTitle">Home</div>  
              <div className="para-animation homePara">
                <p>
                  Click here to navigate to the home section of the website
                </p>
              </div>
            </div>
            <div className='div-animation about'>
              <div className='title-animation aboutTitle' >About</div>
              <div className="para-animation aboutPara">
                <p>
                  Click here to navigate to the about section of the website
                </p>
              </div>
            </div>
            <div className='div-animation work'>
              <div className='title-animation workTitle'>Work</div>
              <div className="para-animation wokPara">
                <p>
                  Click here to navigate to the work section of the website
                </p>
              </div>
            </div>
            <div className='div-animation contact'>
              <div className='title-animation contactTitle' >Contact</div>
              <div className='para-animation contactForm'>
                <form>
                  <p>Email</p>
                </form>
              </div>
            </div>
        </div>
    </div>    
  )
}
