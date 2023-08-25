import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Header from '../compoments/header/Header';
import trus from '../assets/images/download.png'
import trophees from '../assets/images/recompenses-1-min.png'
import { MdEco } from 'react-icons/md';

/*import google from '../assets/images/google.svg'*/
import pc from '../assets/images/Linxea-desktop-bo.png'
import stars from '../assets/images/stars.png'
import './Accueil.css'
import Avantage from '../compoments/avantage/Avantage';
import Partenaires from '../compoments/partenaires/Partenaires';



function Accueil() {
  return (
    <>
    <Header />
        <section className='slider-container'>
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
        </section>
    <section className='container-infos'> 
    {/** Block Avantage  CRU*/}
             <Avantage />
            <div className='infos'>
                    <div className='trophees-infos'>
                        <img src={trophees} alt='trophees' />
                    </div>
                    <div className='date-infos'>
                        <h2>Plus de 11 récompenses en 2022 !</h2>
                        <p>Ces distinctions ont été attribuées en 2022 par les journalistes de la publication en fonction de leurs propres critères d’analyse. La durée des récompenses est d’un an à compter de sa date d’attribution.</p>
                        <div className='simuler'>   <span className='flesh'><IoIosArrowForward /></span>Voir toutes les récompenses</div>
                    </div>
                    <div className='green-infos'>
                       <MdEco />
                        <h2>Finance durable</h2>
                        <p>Accès à plus de 300 fonds responsables (Finansol, ISR ..) et 80 fonds Article 9 (SFDR)</p>
                    </div>
            </div>

    {/** partenaires */}
            <Partenaires />
    </section>  

    </>
  )
}

export default Accueil