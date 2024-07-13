import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import image1 from '../../assets/education_logo-removebg-preview (1).png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
    })
  })
  return (
    <nav  className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={image1} alt="" className="logo" />
        <ul >
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link class="btn" to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        </ul>
        <i class="ri-menu-5-fill" className='menu'></i>
    </nav>
  )
}

export default Navbar
