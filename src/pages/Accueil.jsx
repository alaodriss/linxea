import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Header from '../compoments/header/Header';
import trus from '../assets/images/download.png'
/*import google from '../assets/images/google.svg'*/
import pc from '../assets/images/Linxea-desktop-bo.png'
import stars from '../assets/images/stars.png'
import './Accueil.css'
import Avantage from '../compoments/avantage/Avantage';

function Accueil() {
  return (
    <>
    <Header />
        <div className='slider-container'>
            <div className='slider'> 
            <div className='slider-infos'>
                <h1>Votre épargne mérite <br/><span id="spin"></span></h1>
                <p className='description'>Les placements les plus efficaces du marché : assurance <br /> vie, PER, SCPI... Profitez de frais bas pour votre épargne.</p>
                <div className='btns'>
                    <div className='btn-inscription'>Souscrire en ligne</div>
                    <div className='simuler'>   <span className='flesh'><IoIosArrowForward /></span> Simuler mon projet</div>
                </div>
                <div className='reviews'>
                    <div className='trustpilot review'>
                        <span className='note'>4,3&nbsp;<img className='trustpilot' src={trus} alt='trustpilot'/></span>
                        <img className='stars' src={stars} alt='stars' />
                    </div>
                    <div className='google review'>
                        <span className='note'>4,3&nbsp;<img className='trustpilot' src={trus} alt='google'/></span>
                        <img className='stars' src={stars} alt='stars' />
                    </div>
                </div>
            </div>
            <div className='pc'>
                <img src={pc} alt='pc' />
            </div>
            </div>
        </div>
        <Avantage />
    </>
  )
}

export default Accueil