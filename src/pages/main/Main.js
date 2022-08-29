import React, {useState, useEffect} from 'react'
import './main.css'

export default function Main() {
  const [isHovering, setIsHovering] = useState(false);
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
              <div style={{opacity:isHovering ? 1:0,rotate:isHovering && width.dynamicWidth>=992?'-90deg':'0deg' }} className="para-animation homePara">
                <p >
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

  const styles=()=>{
    title:{}
  }
}
