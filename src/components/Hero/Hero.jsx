import React, { useEffect } from 'react'
import Nav from './Nav'
import './hero.css'
import Description from './Description'
import Card from './Card'
const Hero = () => {
  const options={
    rootMargin: '0px 0px -300px 0px'
  }
  
  useEffect(() => {

    const observer = new IntersectionObserver((entry)=>{
      if(entry[0].isIntersecting){
        document.querySelector('.card').classList.add('cardUp')
        document.querySelector('.card img:first-of-type').classList.add('cards')
        document.querySelector('.card img:last-of-type').classList.add('cards')
        document.querySelector('.scrollTag').classList.add('opacityScroll')
        document.querySelector('.cardCircle').classList.add('cardCircleTurn')

        

      }else{
        document.querySelector('.card').classList.remove('cardUp')
        document.querySelector('.card img:first-of-type').classList.remove('cards')
        document.querySelector('.card img:last-of-type').classList.remove('cards')
        document.querySelector('.cardCircle').classList.remove('cardCircleTurn')
        document.querySelector('.scrollTag').classList.remove('opacityScroll')


      }
      console.log(entry)
    },options)
    observer.observe(document.querySelector('.online-icon'))
  
    
  }, [])
  

  return (
  
    <section className='hero'>
        <div className='designWrapper flex'>
          <div className="design design1"></div>
          <div className="design design2"></div>
          <div className="design design3"></div>

        </div>
        <Nav/>
        <Description/>
        <Card/>
    </section>
    )
}

export default Hero