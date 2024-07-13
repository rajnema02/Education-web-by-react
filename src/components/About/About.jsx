import React from 'react'
import './About.css'
import img4 from '../../assets/images-removebg-preview (2).png'
const About = () =>{
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://plus.unsplash.com/premium_photo-1682974406944-099e0b2a7ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhZHVhdGUlMjBnaXJscyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='about-img'/>
        <img src={img4} alt="" className='play-icon onClick={click}'/>
      </div> 
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nutering Tomorrows leader's group</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ipsa voluptas fugiat odio quidem modi mollitia ab eos. Recusandae natus reprehenderit ipsum mollitia!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quisquam ex laudantium?Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem, odit animi facilis nam quisquam!</p>
      </div>
    </div>
  )
}

export default About
