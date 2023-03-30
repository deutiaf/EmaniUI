import React, { useState } from 'react'
import flag from '../../assets/img/USA-Flag.png'

const Nav = () => {

    const [active, setActive] = useState(1)
  return (
    <nav>
        <div className="navbar flex section">
            <div className="navbarLeft flex">
                <div className="icon flex">
                    <div className="vector"></div>
                    <div className="brand">Univers</div>
                </div>

                <div className="status">
                    <ul className='flex'>
                        <li>
                            <a onClick={()=>{setActive(1)}} className={(active===1)?'active':''} href="#">Personal</a>
                        </li>
                        <li>
                            <a onClick={()=>{setActive(2)}} className={(active===2)?'active':''} href="#">Business</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbarRight">
                <ul className='flex'>
                    <li><a href="#">Features  <span className='arrow'>&#10151;</span></a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#"><img src={flag}  alt="lang flag" srcset="" /><span>EN</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Nav