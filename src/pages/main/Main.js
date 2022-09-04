import React, { useState, useEffect } from 'react'
import './main.css'
import bgimage1 from '../../assests/images/bgimage1.jpg'
import bgimage2 from '../../assests/images/bgimage2.jpg'
import bgimage3 from '../../assests/images/bgimage3.jpg'
import bgimage4 from '../../assests/images/bgimage4.jpg'


export default function Main() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState(false);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [width, setWidth] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [width])

  const setDimension = () => {
    setWidth({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  return (
    <div className='wrapper' >
      <div className='mainContainer' >
        <div style={{ backgroundImage: "url(" + bgimage1 + ")", }} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} className='div-animation home' >
          <div style={{ rotate: isHovering && width.dynamicWidth >= 992 ? '-90deg' : '0deg', }} className="title-animation homeTitle">Intro</div>
          <div style={{margin:20,padding:10, opacity: isHovering ? 1 : 0, rotate: isHovering && width.dynamicWidth >= 992 ? '-90deg' : '0deg', borderColor:'white', borderWidth:1, borderRadius:5,backgroundColor:'rgba(0,0,0,0.35)' }} className="para-animation homePara">
            <p style={{}} >
              Hello, welcome to my website! I am Anakha, a frontend developer hailing from the city of Thiruvananthapuram in India. want to know more about me? Check out the next section
            </p>
          </div>
        </div>
        <div style={{ justifyContent: 'center', backgroundImage: "url(" + bgimage2 + ")", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} onMouseOver={() => setIsHoveringAbout(true)} onMouseOut={() => setIsHoveringAbout(false)} className='div-animation about'>
          <div style={{ rotate: isHoveringAbout && width.dynamicWidth >= 992 ? '-90deg' : '0deg', }} className='title-animation aboutTitle' >About</div>
          <div style={{ opacity: isHoveringAbout ? 1 : 0, rotate: isHoveringAbout && width.dynamicWidth >= 992 ? '-90deg' : '0deg' }} className="para-animation aboutPara">
            <p>
              Click here to navigate to the about section of the website
            </p>
          </div>
        </div>
        <div style={{ justifyContent: 'center', backgroundImage: "url(" + bgimage3 + ")", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} onMouseOver={() => setIsHoveringWork(true)} onMouseOut={() => setIsHoveringWork(false)} className='div-animation work'>
          <div style={{ rotate: isHoveringWork && width.dynamicWidth >= 992 ? '-90deg' : '0deg', }} className='title-animation workTitle'>Work</div>
          <div style={{ opacity: isHoveringWork ? 1 : 0, rotate: isHoveringWork && width.dynamicWidth >= 992 ? '-90deg' : '0deg' }} className="para-animation wokPara">
            <p>
              Click here to navigate to the work section of the website
            </p>
          </div>
        </div>
        <div style={{ justifyContent: 'center', backgroundImage: "url(" + bgimage4 + ")", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} onMouseOver={() => setIsHoveringContact(true)} onMouseOut={() => setIsHoveringContact(false)} className='div-animation contact'>
          <div style={{ rotate: isHoveringContact && width.dynamicWidth >= 992 ? '-90deg' : '0deg', }} className='title-animation contactTitle' >Contact</div>
          <div style={{ opacity: isHoveringContact ? 1 : 0, rotate: isHoveringContact && width.dynamicWidth >= 992 ? '-90deg' : '0deg' }} className='para-animation contactForm'>
            <form>
              <p>Email</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )


}
