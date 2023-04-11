import React from 'react'
import './quality.css'
import SvgCard1 from './SvgCard1'
import cardGlass from '../../assets/img/glassCard.png'
import { useEffect } from 'react'
import c1 from '../../assets/img/c1.png'
import c2 from '../../assets/img/c2.png'
import c3 from '../../assets/img/c3.png'
import c4 from '../../assets/img/c4.png'
import q4c1 from '../../assets/img/q4c1.png'
import q4c2 from '../../assets/img/q4c2.png'
import q2c1 from '../../assets/img/q2c1.png'






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
      
    


      useEffect(() => {
    
        const observer = new IntersectionObserver((entry)=>{
          if(entry[0].isIntersecting){
            Array.from(document.querySelectorAll('.quality3> div')).map((i)=>{i.classList.add('quality3Slide')})
           

    
          }else{
            Array.from(document.querySelectorAll('.quality3> div')).map((i)=>{i.classList.remove('quality3Slide')})

          }
        },options)
        observer.observe(document.querySelector('.quality3'))
      
        
      }, [])
      
    










  return (
        <section className=" quality section">
            <div className="quality1">
                <p>Teamwork makes the dream work</p>
                <h2>Discover the meaning of efficiency with Univers Business</h2>
            </div>
            <div className="quality2 flex">
                <div className='siuuuLeft'>
                    <h3>Send and receive without borders</h3>
                    <p><a href="#">Explore Payments</a></p>
                    <img src={q2c1} alt="" />
                </div>
                <div className='siuuuRight'>
                    <h3>Invoices that work smarter</h3>
                    <p><a href="#">Learn more about Invoices</a></p>
                    <div className="img flex"><img src={cardGlass} alt="" /></div>
                </div>
            </div>
            <div className="quality3 flex">
                 <div className=''>
                        <h3>Smart company debit cards help you and your team go further</h3>
                        <p><a href="#">Learn more about Cards</a></p>
                        <div className="img flex">
                            <img src={c1} alt="" />
                            <img src={c2} alt="" />
                            <img src={c3} alt="" />
                            <img src={c4} alt="" />
                        </div>
                    </div>  
                <div className=''>
                        <div>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_880_18534)">
                            <path d="M20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40ZM13.629 11.67C13.7933 11.5406 14.0022 11.4816 14.2099 11.506C14.4176 11.5304 14.6071 11.6361 14.737 11.8L15.628 12.927C15.7577 13.0913 15.8169 13.3005 15.7925 13.5084C15.7681 13.7163 15.6622 13.9061 15.498 14.036L15.187 14.282C15.1056 14.3464 15.0123 14.3941 14.9124 14.4224C14.8126 14.4507 14.7081 14.4591 14.6051 14.447C14.502 14.4349 14.4023 14.4027 14.3117 14.352C14.2211 14.3014 14.1413 14.2334 14.077 14.152L13.187 13.026C13.1226 12.9446 13.0749 12.8513 13.0466 12.7514C13.0183 12.6516 13.0099 12.5471 13.022 12.4441C13.0341 12.341 13.0663 12.2413 13.117 12.1507C13.1676 12.0601 13.2356 11.9803 13.317 11.916L13.629 11.67ZM25.363 11.855C25.4952 11.6929 25.6863 11.5899 25.8944 11.5685C26.1025 11.5471 26.3106 11.6092 26.473 11.741L26.782 11.993C26.9439 12.1254 27.0468 12.3166 27.068 12.5246C27.0891 12.7327 27.0269 12.9407 26.895 13.103L25.988 14.217C25.8557 14.3794 25.6644 14.4826 25.4561 14.504C25.2478 14.5254 25.0395 14.4631 24.877 14.331L24.569 14.079C24.4069 13.9468 24.3039 13.7557 24.2825 13.5476C24.2611 13.3395 24.3232 13.1314 24.455 12.969L25.363 11.855ZM13.154 23.084L13.327 23.442C13.4177 23.6308 13.4296 23.848 13.3602 24.0456C13.2909 24.2433 13.1458 24.4053 12.957 24.496L11.663 25.119C11.4744 25.2094 11.2576 25.2214 11.0602 25.1522C10.8628 25.083 10.7009 24.9384 10.61 24.75L10.437 24.392C10.3463 24.2033 10.3342 23.9863 10.4033 23.7886C10.4725 23.591 10.6174 23.4289 10.806 23.338L12.101 22.715C12.2896 22.6246 12.5064 22.6126 12.7038 22.6818C12.9012 22.751 13.0631 22.8956 13.154 23.084ZM26.846 23.099C26.9367 22.9104 27.0986 22.7656 27.296 22.6962C27.4934 22.6269 27.7103 22.6386 27.899 22.729L29.194 23.353C29.3824 23.4439 29.527 23.6058 29.5962 23.8032C29.6654 24.0006 29.6534 24.2174 29.563 24.406L29.391 24.765C29.3001 24.9536 29.138 25.0985 28.9404 25.1677C28.7427 25.2368 28.5257 25.2247 28.337 25.134L27.042 24.511C26.8534 24.4201 26.7085 24.258 26.6393 24.0604C26.5702 23.8627 26.5823 23.6457 26.673 23.457L26.846 23.099ZM19.803 27.524H20.2C20.4095 27.524 20.6105 27.6072 20.7586 27.7554C20.9068 27.9035 20.99 28.1045 20.99 28.314V29.75C20.99 29.9595 20.9068 30.1605 20.7586 30.3086C20.6105 30.4568 20.4095 30.54 20.2 30.54H19.803C19.5935 30.54 19.3925 30.4568 19.2444 30.3086C19.0962 30.1605 19.013 29.9595 19.013 29.75V28.313C19.013 28.1035 19.0962 27.9025 19.2444 27.7544C19.3925 27.6062 19.5935 27.524 19.803 27.524ZM19.063 12.664C19.418 11.842 20.583 11.842 20.937 12.664L22.621 16.574L26.86 16.967C27.75 17.049 28.11 18.157 27.438 18.748L24.24 21.558L25.176 25.711C25.373 26.584 24.43 27.268 23.661 26.811L20 24.639L16.339 26.813C15.569 27.269 14.627 26.584 14.824 25.712L15.76 21.559L12.561 18.749C11.889 18.159 12.249 17.05 13.141 16.968L17.379 16.575L19.063 12.665V12.664Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_880_18534">
                            <rect width="40" height="40" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <h3>Exchange, send and spend at great rates</h3>
                        <p><a href="#">Explore Exchanges</a></p>
                        
                    </div>
                      
            </div>    
            <div className="quality4 flex">  
                    <div>
                        <h3>Set and change team permissions with a tap</h3>
                        <p>Stay in total control of your team’s spending by managing their permissions and levels of access. Create custom roles and choose the combination of apps and features you want them to use</p>
                        <p><a href="#">Discover Revolut Business <span> ➜</span></a></p>
                    </div>

                    <div className=''>
                        <img src={q4c1} alt="" />
                        <img src={q4c2} alt="" />
                    </div>      
            </div>
            <div className="quality5">
              <h3>Control all your spend with smart rules</h3>
              
            </div>
        </section>
    )
}

export default Quality