import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>almaazahmed825@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem' />
                <Github color='white' size='3rem' />
                <Linkedin color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer