import React from 'react'
import './Avantage.css'

import {Avantages} from '../../data.js'


function Avantage() {
  return (
  
        <div className='avantages'>
            {Avantages.map((item) => {
                const {id,icon,title,text} = item
               return(
                <div className="avantage" key={id}>
                    <img className='icons-avantage' src={icon} alt={title} />
                    <h2 className='title-avantage'>{title}</h2>
                    <p className='text-avantage'>{text}</p>
                </div>
               )                                                 
            })}
        </div>

  )
}

export default Avantage