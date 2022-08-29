import React, {useState, useEffect} from 'react'
import './main.css'

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
    
    return(() => {
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
            <div style={{justifyContent:'center'}}  onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} className='div-animation home' >
              <div style={{rotate:isHovering&& width.dynamicWidth>=992?'-90deg':'0deg',}} className="title-animation homeTitle">Home</div>  
              <div style={{opacity:isHovering ? 1:0,rotate:isHovering && width.dynamicWidth>=992?'0deg':'90deg' }} className="para-animation homePara">
                <p >
                  Click here to navigate to the home section of the website
                </p>
              </div>
            </div>
            <div onMouseOver={()=>setIsHoveringAbout(true)} onMouseOut={()=>setIsHoveringAbout(false)} className='div-animation about'>
              <div  style={{rotate:isHoveringAbout&& width.dynamicWidth>=992?'-90deg':'0deg',}} className='title-animation aboutTitle' >About</div>
              <div style={{opacity:isHoveringAbout ? 1:0,rotate:isHoveringAbout && width.dynamicWidth>=992?'0deg':'90deg' }} className="para-animation aboutPara">
                <p>
                  Click here to navigate to the about section of the website
                </p>
              </div>
            </div>
            <div  onMouseOver={()=>setIsHoveringWork(true)} onMouseOut={()=>setIsHoveringWork(false)} className='div-animation work'>
              <div style={{rotate:isHoveringWork&& width.dynamicWidth>=992?'-90deg':'0deg',}} className='title-animation workTitle'>Work</div>
              <div style={{opacity:isHoveringWork ? 1:0,rotate:isHoveringWork && width.dynamicWidth>=992?'0deg':'90deg' }} className="para-animation wokPara">
                <p>
                  Click here to navigate to the work section of the website
                </p>
              </div>
            </div>
            <div  onMouseOver={()=>setIsHoveringContact(true)} onMouseOut={()=>setIsHoveringContact(false)} className='div-animation contact'>
              <div style={{rotate:isHoveringContact&& width.dynamicWidth>=992?'-90deg':'0deg',}} className='title-animation contactTitle' >Contact</div>
              <div style={{opacity:isHoveringContact ? 1:0,rotate:isHoveringContact && width.dynamicWidth>=992?'0deg':'90deg' }} className='para-animation contactForm'>
                <form>
                  <p>Email</p>
                </form>
              </div>
            </div>
        </div>
    </div>    
  )

 
}
