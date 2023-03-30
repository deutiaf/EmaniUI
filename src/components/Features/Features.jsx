import React from 'react'
import './features.css'

const Features = () => {
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
        <div className="feature3">

        </div>
        <div className="feature4">

        </div>


      </section>
    )
}

export default Features