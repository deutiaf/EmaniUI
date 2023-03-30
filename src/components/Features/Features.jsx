import React from 'react'
import './features.css'
import hand from '../../assets/img/hand.png'
import bank from '../../assets/img/bank.png'
import { useEffect } from 'react'

const Features = () => {


  const options={
    rootMargin: '0px 0px -300px 0px'
  }
  useEffect(() => {

    const observer = new IntersectionObserver((entry)=>{
      if(entry[0].isIntersecting){
        document.querySelector('.ft4Left').classList.add('ft4LeftAdd')
        document.querySelector('.ft4Right img:first-of-type').classList.add('ft4RightTurn1')
        document.querySelector('.ft4Right img:last-of-type').classList.add('ft4RightTurn2')

      }else{
        document.querySelector('.ft4Left').classList.remove('ft4LeftAdd')
        document.querySelector('.ft4Right img:first-of-type').classList.remove('ft4RightTurn1')
        document.querySelector('.ft4Right img:last-of-type').classList.remove('ft4RightTurn2')

      }
    },options)
    observer.observe(document.querySelector('.feature4'))
  
    
  }, [])
  





  return (
      <section className='section sectionOne flex'>
        <div className="feature flex">
          <div >
            <h3>We keep your money safe</h3>
            <p>Keep your money safe with our anti-fraud system. All our cards support 3D Secure and our contactless card limits help fight contactless fraud</p>
            <div className="ftButtons flex">
              <button className='ftButton1 button1'>See how</button>
              <button className='ftButton2 play'><div></div></button>
            </div>
          </div>
          <div >
            <div className="ft ft1">
              <h4>Card spending you control</h4>
              <p>You’re the boss. Set limits, track, freeze/unfreeze and decide where cards can be used. Expenses automatically remind staff to submit receipts; it’s bookkeeping made easy</p>
              <p className="more"><a href="#">Discover Expenses <span> &#10140;</span></a></p>
            </div>

            <div className="ft ft2">
               <h4>Spend like a local on debit cards with great FX rates</h4>
              <p>Our company cards can go the distance abroad. Spend like a local worldwide in 150 currencies with FX at the real exchange rate</p>
              <p className="more"><a href="#">Learn more about Exchanges <span> &#10140;</span></a></p>
            </div>

            <div className="ft ft3">
                <h4>Stay secure online with virtual debit cards</h4>
                <p>Get added protection from online fraud with virtual cards - each team member can get up to 200. Perfect for tracking subscriptions and other online payments</p>
                <p className="more"><a href="#">Get started <span> &#10140;</span></a></p>
            </div>

            <div className="ft ft4">
                <h4>Empower your team with company debit cards</h4>
                <p>However big or small your team is, our company cards have got you covered. Spend securely with physical and virtual debit cards that you control</p>
                <p className="more"><a href="#">Get started <span> &#10140;</span></a></p>
            </div>
          </div>
        </div>
        <div className="feature2 flex">
          <h3>
            Get to know more about Univers
          </h3>
          <p>We are customer - focused digital bank that
              provides complete financial solutions to meet
              your entire financial needs
          </p>
        </div>
        <div className="feature3 flex">
            <div className="population">
              <div className="popCard1"></div>
              <div className="popCard2"></div>
              <div className="popCard3">
                <h3>250K</h3>
                <p>Univers’s from all over the globe</p>
              </div>
            </div>
            <div className="population">
              <div className="popCard1"></div>
              <div className="popCard2"></div>
              <div className="popCard3">
                <h3>500M</h3>
                <p>Univers’s revenue in 2022 in the first quarter</p>
              </div>
            </div>
            <div className="population">
              <div className="popCard1"></div>
              <div className="popCard2"></div>
              <div className="popCard3">
                <h3>280%</h3>
                <p>Univers’s investment growth in 2023</p>
              </div>
            </div>
        </div>
        <div className="feature4 flex">
          <div className="ft4Left">
            <h3>Make an impression with metal</h3>
            <p>Get our iconic metal cards forged from stainless steel, for you and your power players.  Add your company name to the front for an extra professional touch. Exclusively for paid plans. Subject to additional fees</p>
            <p><a href="#">Order a Metal card <span> ➜</span></a></p>
          </div>
          <div className='ft4Right flex'>

            <img src={bank} alt="" />
            <img src={hand} alt="" />
          </div>
        </div>


      </section>
    )
}

export default Features