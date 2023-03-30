import React from 'react'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import bitmap from '../../assets/img/bitmap.png'


const Description = () => {
  return (
    <div className='home section flex'>
        <div className="description flex">
            <div className="slogan">
                <h1>Digitize your <br /> univers bank</h1>
            </div>

            <div className="buttons">
                <p>
                    Money should be easy, it is time to say
                    goodbye to banks & financial services
                    companies that don’t work for you
                </p>
                <div className="buttonGroup flex">
                    <button className="button1">Digitize Now</button>
                    <button className="play flex"><div></div></button>
                </div>
            </div>
        </div>

        <div className="users">
            <div className="users-panel flex">
                <div className="avatars">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>

                <p className="total-users ">16M</p>
            </div>
            <div className="actif-users flex">
                <div className="online-icon"></div>
                <span>d'utilisateurs actifs dans le monde</span>
            </div>          
        </div>

        <div className="scrollTag flex">scroll <div className="turn"><span className='scrollArrow'> &#10140;</span></div></div>
        <div className="path flex">

        <svg
   width="100%"
   height="100%"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg272"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs269" />
  <g
     id="layer1">
    <path
       id="rect378"
       style={{fill:"white",strokeWidth:0.264583}}
       d="m -0.52554932,129.57607 v 48.88694 H 209.73965 v -48.88694 l -76.79603,-0.26283 c -18.11068,2.31675 -18.03131,14.6981 -33.067546,14.7188 -13.459242,-0.54636 -16.008182,-12.13921 -30.439221,-14.98163 z" />
  </g>
</svg>
            {/* <img className='bitmap' src={bitmap} alt="" srcset="" /> */}
            {/* <div className=" band bandRight"></div>
            <div className="circle"></div>
            <div className="band bandLeft"></div> */}
        </div>


    </div>
  )
}

export default Description
