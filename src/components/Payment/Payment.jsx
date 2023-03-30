import React from 'react'
import './payment.css'
import arrow from '../../assets/img/arrow.png'

const Payment = () => {
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
                            <div></div>
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
                                <div></div>
                                <p>USD</p>
                                <img src={arrow} alt="" />
                            </div>
                            <div>$1,230.94</div>
                        </div>
                </div>
                <div className="slide3"></div>
                <div className="slide4"></div>
                <div className="slide5"></div>
            </div>
        </section>
    )
}

export default Payment