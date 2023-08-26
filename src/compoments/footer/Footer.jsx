import React from 'react'
import logo from '../../assets/images/logo-white.svg'
import GENERALI from '../../assets/images/Generali-logo-white.svg'
import APICIL from '../../assets/images/Apicil-logo-white.svg'
import SPIRICA from '../../assets/images/Spirica-logo-white.svg'
import SURAVENIR from '../../assets/images/Suravenir-logo-white.svg'

import './Footer.css'

import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Footer() {
  return (
    <>
    <div className='container-footer'>
        <div className='footer-top'>
            <img src={logo} alt="logo" />
            <ul>
                <li><BsFacebook/></li>
                <li><TiSocialLinkedinCircular/></li>
                <li><BiLogoInstagramAlt/></li>
                <li></li>
            </ul>
            <p className="number-phone">01 45 67 34 22 <br/>
                <span>Du lundi au vendredi de 9h à 18h</span>
            </p>
            <img   src={GENERALI} alt='logo'/>
            <img  src={APICIL} alt='logo'/>
            <img  src={SPIRICA} alt='logo'/>
            <img   src={SURAVENIR} alt='logo'/>
        </div>

    </div>
        
    </>
  )
}

export default Footer