import React from 'react'
import './quality.css'
import SvgCard1 from './SvgCard1'
import cardGlass from '../../assets/img/glassCard.png'
import { useEffect } from 'react'





const Quality = () => {





    const options={
        rootMargin: '0px 0px -200px 0px'
      }
      useEffect(() => {
    
        const observer = new IntersectionObserver((entry)=>{
          if(entry[0].isIntersecting){
            document.querySelector('.siuuuLeft').classList.add('siuuu1')
            document.querySelector('.siuuuRight').classList.add('siuuu2')
            document.querySelector('.siuuuLeft').classList.remove('siuuuOpacity')
            document.querySelector('.siuuuRight').classList.remove('siuuuOpacity')

    
          }else{
            document.querySelector('.siuuuLeft').classList.add('siuuuOpacity')
            document.querySelector('.siuuuRight').classList.add('siuuuOpacity')
           

           setTimeout(()=>{
                    if(document.querySelector('.siuuuLeft').classList.contains('siuuuOpacity')){
                        document.querySelector('.siuuuLeft').classList.remove('siuuu1')
                        document.querySelector('.siuuuRight').classList.remove('siuuu2')
                    }
           },2000)

    
          }
        },options)
        observer.observe(document.querySelector('.quality2'))
      
        
      }, [])
      
    










  return (
        <section className=" quality section">
            <div className="quality1">
                <p>Teamwork makes the dream work</p>
                <h3>Discover the meaning of efficiency with Univers Business</h3>
            </div>
            <div className="quality2 flex">
                <div className='siuuuLeft'>
                    <h3>Send and receive without borders</h3>
                    <p>Explore Payments</p>
                    <div >
                        <SvgCard1/>
                    </div>
                </div>
                <div className='siuuuRight'>
                    <h3>Invoices that work smarter</h3>
                    <p>Learn more about Invoices</p>
                    <div className="img flex"><img src={cardGlass} alt="" /></div>
                </div>
            </div>
            <div className="quality3"></div>    
            <div className="quality4"></div>
            <div className="quality5"></div>
        </section>
    )
}

export default Quality