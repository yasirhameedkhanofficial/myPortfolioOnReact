import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

function Nav() {
  return (
    <>
      <div className="nav">
        <h2>PORTFOLIO</h2>
        <ul className="list">
          <Link to='home' spy={true} activeClass='active' duration={500} smooth={true}><li>Home</li></Link>
          <Link to='about' spy={true} activeClass='active' duration={500} smooth={true}><li>About</li></Link>
          <Link to='project' spy={true} activeClass='active' duration={500} smooth={true}><li>Project</li></Link>
          <Link to='contact' spy={true} activeClass='active' duration={500} smooth={true}><li>Contact</li></Link>
          
          
        </ul>
      </div>
    </>
  )
}

export default Nav
