import React from 'react'
import {partenaires} from '../../data'
import './Partenaires.css'
import Silder from '../silder/Silder'

function Partenaires() {
  return (
    <>
    <section className='partenaires'>
    <h2>Des partenaires solides</h2>
    <p>Votre épargne est sécurisée chez nos partenaires assureurs</p>
        <div className='content-partenaires'>
            {partenaires.map((partenaire) => {
                return (
                    <div className='partenaire' key={partenaire.id}> 
                        <img src={partenaire.partenair} alt='partenaires' />
                    </div>
                )
            })}
        </div>

        
            {/** Silder */}
            <Silder />
            {/** Silder */}
</section>

    </>
  )
}

export default Partenaires