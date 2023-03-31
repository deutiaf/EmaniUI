import React from 'react'
import './payment.css'
import arrow from '../../assets/img/arrow.png'
import { useEffect } from 'react'

const Payment = () => {



    const options={
        rootMargin: '0px 0px -400px 0px'
      }
      
      useEffect(() => {
    
        const observer = new IntersectionObserver((entry)=>{
          if(entry[0].isIntersecting){
            document.querySelector('.slide1').classList.add('slideAdd1')
            document.querySelector('.slide3').classList.add('slideAdd1')
            document.querySelector('.slide2').classList.add('slideAdd1')
            document.querySelector('.slide4').classList.add('slideAdd1')

    
            
    
          }else{
            document.querySelector('.slide1').classList.remove('slideAdd1')
            document.querySelector('.slide3').classList.remove('slideAdd1')
            document.querySelector('.slide2').classList.remove('slideAdd1')
            document.querySelector('.slide4').classList.remove('slideAdd1')
    
          }
        },options)
        observer.observe(document.querySelector('.payment2'))
      
        
      }, [])
      
    




  return (
        <section className='payment flex section'>
            <div className="payment1">
                <h4>Transfers</h4>
                <h1>International payments for your business</h1>
                <p>Join thousands of businesses saving on fees with fast local and international transfers</p>
                <div className="paymentButton flex">
                    <button className='button1'> Get started</button>
                    <button className='button1'> Contact sales</button>
                </div>
            </div>
            <div className="payment2">
                <div className="slide1">
                    <h5>You send</h5>
                    <div className="stat flex">
                        <div className='flex'>
                            <div className='cir'></div>
                            <p>GPB</p>
                            <img src={arrow} alt="" />
                        </div>
                        <div>£1,000</div>
                    </div>
                </div>
                <div className="slide2">
                    <h5>Recipient gets</h5>
                        <div className="stat flex">
                            <div className='flex'>
                                <div className='cir'></div>
                                <p>USD</p>
                                <img src={arrow} alt="" />
                            </div>
                            <div>$1,230.94</div>
                        </div>
                </div>
                <div className="slide3">
                    <div>
                        <div className="des">Our current FX rate<span>&#8505;</span></div>
                        <div className="val">£1 = $1.2309</div>
                    </div>
                    <div>
                        <div className="des">Bank transfer fee ^</div>
                        <div className="val">£3</div>
                    </div>
                    <div>
                          <div className="des">FX fee<span>&#8505;</span></div>
                        <div className="val">£4</div>
                    </div>
                    <div>
                      <div className="des">Your Total<span>&#8505;</span></div>
                        <div className="val">£1,007</div>
                    </div>
                    <div>
                        <div className="des">Estimated arrival<span>&#8505;</span></div>
                        <div className="val">Today</div>
                    </div>
                </div>
                <div className="slide4">
                    <p>That’s <span>£1,007</span> for you in total including all fees.</p>
                    <p>Fees shown are for the Free Plan. Upgrade plan and pay fewer fees or <a href="#">contact sales</a> to create your custom plan.</p>
                </div>
                <button className='but button1'>Get Started</button>
            </div>
        </section>
    )
}

export default Payment